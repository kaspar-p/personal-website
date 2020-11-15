import axios from "axios";

import Update from "./models/Update.js";
import Commit from "./models/Commit.js";
import UserCount from "./models/UserCount.js";

/**
 * Begin retrieving data from Github
 * @param   {Interval}  interval  The global interval variable
 * @returns {void}
 */
export const beginInterval = async (interval) => {
  await pollGithubWrapper(interval);
};

/**
 * Error handling wrapper around pollGithubAndSave
 * @param   {Interval} interval The global interval variable
 * @returns {void}
 */
const pollGithubWrapper = async (interval) => {
  let { status, statusMsg } = await pollGithubAndSave();

  if (status === "SUCCESS") {
    interval = setInterval(() => {
      const userCount = UserCount.find()
        .then((UC) => parseInt(UC))
        .pop();

      if (userCount === 0) return;
      pollGithubWrapper(interval);
    }, 60 * 60 * 1000);
  } else {
    console.log({ STATUS: status, STATUS_MSG: statusMsg });
    return;
  }
};

/**
 * Stop polling Github for data
 * @param   {Interval}  interval The global interval variable
 * @returns {void}
 */
export const endInterval = async (interval) => {
  clearInterval(interval);
};

// Fetches Github commits and saves into the DB as Update documents
export const pollGithubAndSave = async () => {
  // Get all repo names
  let repositories;
  try {
    repositories = await axios({
      method: "get",
      url: `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }).then((response) => response.data);
  } catch (error) {
    return {
      statusMsg: `Getting Github repositories failed ::: ${error.response.status} : ${error.response.statusText}`,
      status: "FAILED",
    };
  }

  const repoNames = repositories.map((repo) => repo.name);

  // Get all commits from all repoNames as promises to run them concurrently
  const commitPromises = repoNames.map((repoName) =>
    axios({
      method: "get",
      url: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}/commits`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
  );

  // Save all commits as updates
  let commitsPacked;
  try {
    commitsPacked = await Promise.all(commitPromises);
  } catch (error) {
    return {
      statusMsg: `Getting Github commits failed ::: ${error.response.status} : ${error.response.statusText}`,
      status: "FAILED",
    };
  }

  // Weird file structure
  for (let commits of commitsPacked) {
    for (let commit of commits.data) {
      const { message, url, author } = commit.commit;

      // If this commit has already been saved in the DB: true if exists, false if doesn't

      if (Commit.exists(url.toString())) {
        continue;
      } else {
        try {
          console.log("NEW COMMIT FOUND");
          console.log(commit.commit);
          await Commit.create({ message, url, author });

          // For displaying, the commit property is for the author and URL - further down the line
          // TODO: clickable list to expand each item?
          await Update.create({
            title: message,
            desc: "Update to code: " + url.split("/")[5],
            isCommit: true,
            date: author.date,
            commitURL: url,
          });
        } catch (error) {
          console.log("error saving!: ", error);
        }
      }
    }
  }

  return {
    status: "SUCCESS",
    statusMsg: "Github data retrieved and saved",
  };
};
