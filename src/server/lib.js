import axios from "axios";

import Update from "./dataModels/Update.js";
import Commit from "./dataModels/Commit.js";

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

export const beginInterval = async () => {
  await pollGithubAndSave();
  return setInterval(pollGithubAndSave, 5 * 60 * 1000);
};

// Fetchs Github commits and saves into the DB as Update documents
const pollGithubAndSave = async () => {
  let numUpdates = await Update.countDocuments();

  // Get all repo names
  const repos = await axios
    .get("https://api.github.com/users/kaspar78/repos")
    .then(repoData => repoData.data);
  const repoNames = repos.map(repo => repo.name);

  // Get all commits from all reponames as promises to run them concurrently
  const commitPromises = repoNames.map(repoName =>
    axios.get(`https://api.github.com/repos/kaspar78/${repoName}/commits`)
  );

  // Save all commits as updates
  const commitsPacked = await Promise.all(commitPromises);

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
};

export default pollGithubAndSave;
