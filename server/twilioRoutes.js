import twilio from "twilio";
import express from "express";

import { roundOut } from "./lib.js";

const router = express.Router();
const MessagingResponse = twilio.twiml.MessagingResponse;

import generateHaiku from "./haiku.js";

let balance = 30.0;
const mochaPrices = {
  S: 3.48,
  M: 3.96,
  L: 4.45
};

// ---------------------
//     TWILIO ROUTES
// ---------------------

router.post("/", (req, res) => {
  const twiml = new MessagingResponse();

  if (Object.keys(req.body).length === 0) {
    console.log("ERROR, NO MESSAGE");
  }

  const incomingText = req.body.Body.toString();

  if (incomingText === "MOCHA") {
    let sizeOptions = ["S", "M", "L"].filter(key => mochaPrices[key] < balance);

    if (sizeOptions.length === 0) {
      twiml.message(
        'There is not enough money left in your balance for a mocha! You can always request a haiku with "HAIKU", though!'
      );
    } else {
      sizeOptions = sizeOptions.join("/");
      twiml.message(`What size mocha would you like? (${sizeOptions}): `);
    }
  } else if (
    incomingText === "S" ||
    incomingText === "M" ||
    incomingText === "L"
  ) {
    const newBalance = roundOut(balance - mochaPrices[incomingText]);
    if (newBalance < 0) {
      twiml.message(
        'There is not enough money left in your balance for a mocha! You can always request a haiku with "HAIKU", though!'
      );
    } else {
      const expandedSize = {
        S: "Small",
        M: "Medium",
        L: "Large"
      };
      balance = newBalance;
      let message = `${expandedSize[incomingText]} Mocha ordered. Remaining balance: $${balance}. Now for some poetry to enjoy it with, just send "HAIKU"!`;
      twiml.message(message);
    }
  } else if (incomingText === "HAIKU") {
    twiml.message(generateHaiku().join(" / "));
  } else {
    twiml.message(
      'Unrecognized message. Please send "MOCHA" or "HAIKU" and follow the instructions!'
    );
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

export default router;
