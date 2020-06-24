const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const url = require("url");
const axios = require("axios");
const mongoose = require("mongoose");
const ejs = require("ejs");
const childProcess = require("child_process");
const fs = require("fs");
require("dotenv").config();

const Update = require("./schemas/updateSchema");
const Commit = require("./schemas/commitSchema");
const LastCalled = require("./schemas/lastCalledSchema");

const validateUpdateEntry = require("./validators/validateUpdateEntry");

// Using the || because deployment apps will inject a port, and 8080 is for development
const PORT = process.env.PORT || 8080;

// For easy rendering for server file serving
app.set("view engine", "ejs");

// For nice URL referencing within the .ejs files
app.use(express.static(__dirname + "/static"));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

// DATABASE INITIALIZATION
try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
  });

  console.log("Database securely connected");
} catch {
  console.log("Database connection not established! Error occurred!");
}

app.listen(PORT, () =>
  console.log(`Server running successfully at port: ${PORT}`)
);

// ROUTING

// If the route does not begind with /api, return the HTML of the page requested
app.get(/^(?!\/api\/)/, async (req, res) => {
  // Decides whether the daily Github request should be performed
  if (await shouldPollGithub()) {
    console.log("Requesting data from Github!");
    await pollGithubAndSave();
  } else {
    console.log(
      `Not polling github - too soon! Will request data again tomorrow!`
    );
  }

  // Change things from /path-url.ejs to the real path i.e. views/pages/path-url.ejs
  let pageURL = url.parse(req.url, true);
  let pathname = "views/pages" + pageURL.pathname;
  if (pathname[pathname.length - 1] === "/") {
    pathname += "index.ejs";
  }

  // Will show the the 404 page if the page does not exist
  try {
    templateString = fs.readFileSync(pathname, "utf-8");
  } catch (e) {
    pathname = "views/pages/notfound.ejs";
    templateString = fs.readFileSync(pathname, "utf-8");
  }

  return res.end(
    ejs.render(templateString, {
      filename: pathname
    })
  );
});

// Gets updates when the 'recent updates' page is visited
app.get("/api/updates", async (req, res) => {
  const updates = await Update.find()
    .sort({ date: -1 })
    .then(updates => updates);

  return res.send({ data: updates });
});

// One time post request for saving a new last called into the DB
app.post("/api/newLastCalled", async (req, res) => {
  const lastCalled = new LastCalled({
    lastCalled: new Date()
  });
  await lastCalled.save();
  return res.json({ success: "This post request was a success!" });
});

// For the Reed-Solomon encoder/decoder in projects
app.post("/api/getRSData", async (req, res) => {
  // Run the java program
  childProcess.exec(
    "cd static/assets/code && java qrcode/Main " + req.body.message,
    (err, stdout, stderr) => {
      if (err) console.log(err);
      if (stderr) console.log(stderr.toString());
      const dataArray = stdout.split("\n").slice(0, -1);
      // Return the data back to the page that wanted it
      return res.send({ data: dataArray });
    }
  );
});

// Test GET method
app.get("/api/test", (req, res) => {
  return res.json({
    success: "This GET test returned successfully!!"
  });
});

// Test POST method
app.post("/api/test", (req, res) => {
  return res.json({
    success: "This POST test returned successfully!!"
  });
});

// Create a new update through Postman - validation included
app.post("/api/newUpdate", async (req, res) => {
  const data = JSON.parse(req.body);

  const { error, isValid } = validateUpdateEntry(data);

  if (!isValid) {
    return res.json({
      message: "The data entered was not valid: " + error
    });
  }

  const newUpdate = {
    ...data,
    date: new Date().toLocaleDateString()
  };

  await newUpdate.save();

  return res.json({ success: "New update created!" });
});

// To fetch commit data from Github immediately. Does not wait for day-reset.
app.post("/api/fetchGithub", async (req, res) => {
  await pollGithubAndSave();
  return res.send({ success: "Successfully fetched data from Github!" });
});

// For checking whether a certain commit has already been in the DB
const checkChanges = (url, commits) => {
  for (commit of commits) {
    // Return true because it exists. URL is unique to each commit
    if (commit.url === url) return true;

    // No properties in common. URL is unique. Commits do not match.
    if (commit.url !== url) continue;
  }

  // If we have 'continued' through the entire list - this is a new commit
  return false;
};

// Boolean to decide whether it is a new day
const shouldPollGithub = async () => {
  const lastCalled = await LastCalled.findOne();

  if (
    !lastCalled ||
    lastCalled.lastCalled.toLocaleDateString() !==
      new Date().toLocaleDateString()
  ) {
    // For Github only to be requested once per day. This should stop the massive amount of requesting, and keeps us under the rate_limit.
    lastCalled.lastCalled = new Date();
    await lastCalled.save();
    return true;
  } else {
    return false;
  }
};

// Big function to fetch the Github commit data, and save it using the commit schema
const pollGithubAndSave = async () => {
  let numUpdates = await Update.countDocuments().then(count => count);

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
        const newCommit = new Commit({ message, url, author });
        await newCommit.save();

        // For displaying, the commit property is for the author and URL - further down the line
        // TODO: clickable list to expand each item?
        const newUpdate = new Update({
          title: newCommit.message,
          desc: "An update to my code base: " + newCommit.url.split("/")[5],
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
