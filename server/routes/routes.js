import childProcess from "child_process";
import express from "express";
import dotenv from "dotenv";

import Update from "../dataModels/Update.js";

const router = express.Router();
dotenv.config();

// ------------------
//     API ROUTES
// ------------------

// Gets updates when the 'recent updates' page is visited
router.get("/updates", async (req, res) => {
  const updates = await Update.find()
    .sort({ date: -1 })
    .then(updates => updates);

  return res.json(updates);
});

// For the Reed-Solomon encoder/decoder in projects
router.post("/RS", async (req, res) => {
  // Run the java program
  try {
    childProcess.exec(
      "cd client/src/assets/code " + "&& java qrcode/Main " + req.body.message,
      (err, stdout, stderr) => {
        if (err) console.log(err);
        if (stderr) console.log(stderr.toString());
        const dataArray = stdout.split("\n").slice(0, -1);
        // Return the data back to the page that wanted it
        return res.send(dataArray);
      }
    );
  } catch (error) {
    return res.json({
      ERROR: error
    });
  }
});

// Sends back the PDF file of the paper
router.get("/rs-paper", async (req, res) => {
  return res.sendFile("OntheConstructionofReedSolomonCodes.pdf", {
    root: "client/public/"
  });
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/test",
    method: "GET",
    status: "SUCCESS"
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/test",
    method: "POST",
    status: "SUCCESS"
  });
});

export default router;
