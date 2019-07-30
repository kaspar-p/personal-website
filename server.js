const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const url = require("url");
const axios = require("axios");
const mongoose = require("mongoose");
const ejs = require("ejs");

const Update = require("./schemas/updateSchema");
const Commit = require("./schemas/commitSchema");
const LastCalledSchema = mongoose.Schema(
  {
    lastCalled: {
      required: true,
      type: Date,
      default: null,
    },
  },
  { strict: false }
);
const LastCalled = mongoose.model("LastCalled", LastCalledSchema);

const p = "326e644b696421216973636f6f6c477579";

// TODO move to file and make cleaner
class PageData {
  // Quality of life variables

  constructor(pagePath, keyList) {
    this.path = pagePath;
    this.data = {};
    this.options = {
      writable: true,
      configurable: true,
      enumerable: true,
    };

    // init all of the data to null - for page loading
    for (let key of keyList) {
      Object.defineProperty(this.data, key, {
        value: null,
        ...this.options,
      });
    }
  }

  addData(newObj) {
    this.objects.push(newObj);
  }

  fillData(key, value) {
    Object.defineProperty(this.data, key, {
      value,
      ...this.options,
    });
  }
}

const validateUpdateEntry = require("./validators/validateUpdateEntry");

// This port is unique for this app only
const PORT = 8080;

const homePath = "./pages";
let templatePath = "./views/pages/index.ejs";
const fs = require("fs");
let templateString = fs.readFileSync(templatePath, "utf-8");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

const fn = p => {
  var hex = p.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};

// DATABASE
const MONGODB_URL = `mongodb+srv://kaspar78:${fn(p)}@cluster0-rkk73.gcp.mongodb.net/test?retryWrites=true&w=majority`;
try {
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
  });

  console.log("Database securely connected");
} catch {
  console.log("Database connection not established! Error!");
}

const homeData = new PageData(homePath, ["updates"]);

app.listen(PORT, () => console.log(`Server running successfully at port: ${PORT}`));

// ROUTING

// For updating the list continuously and programmatically
app.get("/api/updates", async (req, res) => {
  const updates = await Update.find().then(updates => updates);
  homeData.fillData("updates", updates);
  return res.end(
    ejs.render(templateString, {
      ...homeData,
      filename: templatePath,
    })
  );
});

// One time post request for saving a new last called into the DB
app.post("/api/newLastCalled", async (req, res) => {
  const lastCalled = new LastCalled({
    lastCalled: new Date(),
  });
  await lastCalled.save();
  return res.json({ success: "This post request was a success!" });
});

// Test GET method
app.get("/api/test", (req, res) => {
  return res.json({
    success: "This test returned successfully!!",
  });
});

app.post("/api/testNewUpdate", async (req, res) => {
  const allUpdates = await Update.find().then(updates => updates);
  const newBody = {
    ...req.body,
    updateNumber: allUpdates.length + 1,
  };

  const data = new Update(newBody);
  await data.save();
  return res.end(
    ejs.render(templateString, {
      ...homeData,
      filename: templatePath,
    })
  );
});

app.post("/api/newUpdate", async (req, res) => {
  const data = JSON.parse(req.body);

  const { error, isValid } = validateUpdateEntry(data);

  if (!isValid) {
    return res.json({
      message: "The data entered was not valid: " + error,
    });
  }

  const { title, desc } = data;

  const newUpdate = {
    title,
    desc,
    date: new Date().toLocaleDateString(),
    udpateNumber: 2,
  };

  await newUpdate.save().then(savedUpdate => savedUpdate);
  return res.end(
    ejs.render(templateString, {
      ...homeData,
      filename: templatePath,
    })
  );
});

// If the route does not begind with /api, return the HTML of the homepage
app.get(/^(?!\/api\/)/, async (req, res) => {
  const lastCalled = await LastCalled.findOne();

  if (await shouldPollGithub(lastCalled)) {
    console.log("Requesting data from Github!");
    await pollGithubAndSave();
  } else {
    console.log(`Not polling github - too soon! Will request data again tomorrow!`);
  }

  const updates = await Update.find()
    .sort({ date: -1 })
    .then(updates => updates);

  homeData.fillData("updates", updates);

  let pageURL = url.parse(req.url, true);
  let pathname = "views/pages" + pageURL.pathname;

  if (pathname[pathname.length - 1] === "/") {
    pathname += "index.ejs";
  }
  
  // Will throw an exception if the page does not exist. If so, show them the 404 page
  try {
    templateString = fs.readFileSync(pathname, "utf-8");
  } catch (e) {
    pathname = "views/pages/notfound.ejs";
    templateString = fs.readFileSync(pathname, "utf-8");
  }

  res.end(
    ejs.render(templateString, {
      ...homeData,
      filename: templatePath,
    })
  );
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

const shouldPollGithub = async lastCalled => {
  if (!lastCalled || lastCalled.lastCalled.toLocaleDateString() !== new Date().toLocaleDateString()) {
    // For Github only to be requested once per day. This should stop the massive amount of requesting, and keeps us under the rate_limit.
    lastCalled.lastCalled = new Date();
    await lastCalled.save();
    return true;
  } else {
    return false;
  }
};

const pollGithubAndSave = async () => {
  let numUpdates = await Update.countDocuments().then(count => count);

  // Get all repo names
  const repos = await axios.get("https://api.github.com/users/kaspar78/repos").then(repoData => repoData.data);
  const repoNames = repos.map(repo => repo.name);

  // Get all commits from all reponames as promises to run them concurrently
  const commitPromises = repoNames.map(repoName => axios.get(`https://api.github.com/repos/kaspar78/${repoName}/commits`));

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
          commit: newCommit,
        });
        await newUpdate.save();

        // To give each github commit a different updateNumber
        numUpdates++;
      }
    }
  }
};
