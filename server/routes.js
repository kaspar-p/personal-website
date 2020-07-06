import childProcess from "child_process";
import express from "express";

import Update from "./dataModels/Update.js";
import pollGithubAndSave from "./lib.js";

import twilio from "twilio";
const VoiceResponse = twilio.twiml.VoiceResponse;

// ------------------
//     ALL ROUTES
// ------------------

const router = express.Router();

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
  let root;
  if (process.env.NODE_ENV === "production") {
    root = "client/public/";
  } else {
    root = "client/public/";
  }

  return res.sendFile("OntheConstructionofReedSolomonCodes.pdf", {
    root
  });
});

// -----------------
//    TWILIO ROUTES
// -----------------

router.get("/caller", (req, res) => {
  const message =
    "Thank you for calling. Thank you for calling. This is an automated response. Call my personal number to reach me: 9 7 0 4 8 1 2 1 4 2";

  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: "man" }, message);

  // Render the response as XML in reply to the webhook request
  response.type("text/xml");
  response.send(twiml.toString());
});

// -----------------
//    TEST ROUTES
// -----------------

// Fetches immediately for testing
router.post("/test-fetchGithub", async (req, res) => {
  await pollGithubAndSave();
  return res.json({ success: "Successfully fetched data from Github!" });
});

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    success: "This GET test returned successfully!!"
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    success: "This POST test returned successfully!!"
  });
});

export default router;
