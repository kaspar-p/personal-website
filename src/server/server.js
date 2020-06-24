import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import childProcess from "child_process";
import dotenv from "dotenv";

import Update from "./dataModels/Update.js";
import pollGithubAndSave from "./lib.js";

const server = express();
dotenv.config();

// Production will inject a port, undefined if in development mode
const PORT = process.env.PORT || 1111;
server.use(bodyparser.json());

let itvl;

// -------------------------------
//     DATABASE INITIALIZATION
// -------------------------------

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
  });

  console.log("Database securely connected");
} catch {
  console.log("Database connection not established! Error occurred!");
}

server.listen(PORT, () =>
  console.log(`Server running successfully at port: ${PORT}`)
);

// ------------------
//     ALL ROUTES
// ------------------

// Begin the Github polling cycle
server.get("/api/begin-interval", async (req, res) => {
  await pollGithubAndSave();
  itvl = setInterval(await pollGithubAndSave, 60 * 60 * 1000);
});

// End the Github polling cycle
server.get("/api/end-interval", async (req, res) => {
  clearInterval(itvl);
});

// Gets updates when the 'recent updates' page is visited
server.get("/api/updates", async (req, res) => {
  const updates = await Update.find()
    .sort({ date: -1 })
    .then(updates => updates);

  return res.json(updates);
});

// For the Reed-Solomon encoder/decoder in projects
server.post("/api/RS", async (req, res) => {
  // Run the java program
  childProcess.exec(
    "cd src/assets/code && java qrcode/Main " + req.body.message,
    (err, stdout, stderr) => {
      if (err) console.log(err);
      if (stderr) console.log(stderr.toString());
      const dataArray = stdout.split("\n").slice(0, -1);
      // Return the data back to the page that wanted it
      return res.send(dataArray);
    }
  );
});

// -----------------
//    TEST ROUTES
// -----------------

// Fetches immediately for testing
server.post("/api/test-fetchGithub", async (req, res) => {
  await pollGithubAndSave();
  return res.send({ success: "Successfully fetched data from Github!" });
});

// Test GET method
server.get("/api/test", (req, res) => {
  return res.json({
    success: "This GET test returned successfully!!"
  });
});

// Test POST method
server.post("/api/test", (req, res) => {
  return res.json({
    success: "This POST test returned successfully!!"
  });
});
