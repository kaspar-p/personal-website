import childProcess from "child_process";
import twilio from "twilio";
import express from "express";
import dotenv from "dotenv";

import Update from "./dataModels/Update.js";
import pollGithubAndSave, { roundOut } from "./lib.js";
import generateHaiku from "./haiku.js";

// ------------------
//     API ROUTES
// ------------------

const router = express.Router();
dotenv.config();
const MessagingResponse = twilio.twiml.MessagingResponse;
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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

// ---------------------
//     TWILIO ROUTES
// ---------------------

let balance = 26.04;
const mochaPrices = {
  S: 3.48,
  M: 3.96,
  L: 4.45
};

let orderBegun = false;
let storedSize = "";

router.post("/mocha", (req, res) => {
  const twiml = new MessagingResponse();

  if (Object.keys(req.body).length === 0) {
    console.log("ERROR, NO MESSAGE");
  }

  const incomingText = req.body.Body.toString().toUpper();

  const expandedSize = {
    S: "Small",
    M: "Medium",
    L: "Large"
  };
  const unrecognizedMessage = () => {
    twiml.message(
      'Unrecognized message. Please send "MOCHA" or "HAIKU" to get started!'
    );
  };

  const orderMocha = sizeText => {
    sizeText = sizeText.toUpper();
    balance = roundOut(balance - mochaPrices[sizeText]);

    twilioClient.messages.create({
      body: `Papa ordered a mocha of size: ${sizeText}`,
      from: process.env.TWILIO_NUMBER,
      to: process.env.MY_NUMBER
    });

    // Reset
    orderBegun = false;
    storedSize = "";
  };

  if (incomingText === "MOCHA") {
    let sizeOptions = ["S", "M", "L"].filter(key => mochaPrices[key] < balance);

    if (sizeOptions.length === 0) {
      twiml.message(
        'There is not enough money left in your balance for a mocha! You can always request a haiku with "HAIKU", though!'
      );
    } else {
      sizeOptions = sizeOptions.join("/");
      twiml.message(`What size mocha would you like? (${sizeOptions}): `);
      orderBegun = true;
    }
  } else if (
    incomingText === "S" ||
    incomingText === "M" ||
    incomingText === "L"
  ) {
    if (orderBegun) {
      const projectedBalance = roundOut(balance - mochaPrices[incomingText]);
      if (projectedBalance < 0) {
        twiml.message(
          'There is not enough money left in your balance for a mocha! You can always request a haiku with "HAIKU", though!'
        );
      } else {
        orderMocha(incomingText);
        twiml.message(
          `${expandedSize[incomingText]} Mocha ordered. Remaining balance: $${balance}. Now for some poetry to enjoy it with, just send "HAIKU"!`
        );
      }
    } else {
      storedSize = incomingText;
      twiml.message(
        `Seems like you asked for a mocha size before beginning an order. Would you like to order a ${expandedSize[
          incomingText
        ].toLower()} size mocha anyway? (Y/N)`
      );
    }
  } else if (incomingText === "HAIKU") {
    twiml.message(generateHaiku().join(" / "));
  } else if (incomingText === "Y") {
    if (!orderBegun) {
      orderMocha(storedSize);
      twiml.message(
        `${expandedSize[incomingText]} mocha ordered! Enjoy it with a "HAIKU"!`
      );
    } else {
      unrecognizedMessage();
    }
  } else if (incomingText === "N") {
    twiml.message(
      'Ok, no mocha ordered. A "HAIKU" is always available, though!'
    );
  } else {
    unrecognizedMessage();
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
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
