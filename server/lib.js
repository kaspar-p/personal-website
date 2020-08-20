import axios from "axios";

import Update from "./dataModels/Update.js";
import Commit from "./dataModels/Commit.js";

/**
 * Uses PoetryDB from https://github.com/thundercomb/poetrydb to get a random poem.
 * @returns {String}
 */
export const getPoem = async () => {
  let response;
  try {
    response = await axios.get("https://poetrydb.org/random");
  } catch (error) {
    console.log(`Error occurred, poem not retrieved: `, error);
  }

  const { author, title, lines } = response.data;

  const formattedLines = lines.join("\n");
  const formattedPoem = `\n${title}\nBy ${author}\n\n${formattedLines}`;

  return formattedPoem;
};

/**
 * Begin retrieving data from Github
 * @param   {Interval}  interval  The global interval variable
 * @returns {void}
 */
export const beginInterval = async interval => {
  await pollGithubWrapper(interval);
};

/**
 * Error handling wrapper around pollGithubAndSave
 * @param   {Interval} interval The global interval variable
 * @returns {void}
 */
const pollGithubWrapper = async interval => {
  const { status, statusMsg } = await pollGithubAndSave();
  if (status === "SUCCESS") {
    interval = setInterval(() => pollGithubWrapper(interval), 60 * 60 * 1000);
  }
  console.log({ STATUS: status, STATUS_MSG: statusMsg });
  return;
};

/**
 * Stop polling Github for data
 * @param   {Interval}  interval The global interval variable
 * @returns {void}
 */
export const endInterval = async interval => {
  clearInterval(interval);
};

// For checking whether a certain commit has already been in the DB
const checkChanges = (url, commits) => {
  for (let commit of commits) {
    // Return true because it exists. URL is unique to each commit
    if (commit.url === url) return true;

    // No properties in common. URL is unique. Commits do not match.
    if (commit.url !== url) continue;
  }

  // If we have 'continued' through the entire list - this is a new commit
  return false;
};

// Fetches Github commits and saves into the DB as Update documents
export const pollGithubAndSave = async () => {
  let numUpdates = await Update.countDocuments();

  // Get all repo names
  let repositories;
  try {
    repositories = await axios({
      method: "get",
      url: `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }).then(response => response.data);
  } catch (error) {
    return {
      statusMsg: `Getting Github repositories failed ::: ${error.response.status} : ${error.response.statusText}`,
      status: "FAILED"
    };
  }
  const repoNames = repositories.map(repo => repo.name);

  // Get all commits from all repoNames as promises to run them concurrently
  const commitPromises = repoNames.map(repoName =>
    axios({
      method: "get",
      url: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}/commits`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
  );

  // Save all commits as updates
  let commitsPacked;
  try {
    commitsPacked = await Promise.all(commitPromises);
  } catch (error) {
    return {
      statusMsg: `Getting Github commits failed ::: ${error.response.status} : ${error.response.statusText}`,
      status: "FAILED"
    };
  }

  // For checking commits if they are already in the DB
  const allCommits = await Commit.find().then(commits => commits);

  // Weird file structure
  for (let commits of commitsPacked) {
    for (let commit of commits.data) {
      const { message, url, author } = commit.commit;

      // If this commit has already been saved in the DB: true if exists, false if doesn't
      if (checkChanges(url, allCommits)) {
        continue;
      } else {
        console.log("NEW COMMIT FOUND");
        const newCommit = new Commit({ message, url, author });
        await newCommit.save();

        // For displaying, the commit property is for the author and URL - further down the line
        // TODO: clickable list to expand each item?
        const newUpdate = new Update({
          title: newCommit.message,
          desc: "Update to code: " + newCommit.url.split("/")[5],
          updateNumber: numUpdates + 1,
          isCommit: true,
          commit: newCommit
        });
        await newUpdate.save();

        // To give each github commit a different updateNumber
        numUpdates++;
      }
    }
  }

  return {
    status: "SUCCESS",
    statusMsg: "Github data retrieved and saved"
  };
};

export const roundOut = n => Math.round(n * 100) / 100;
