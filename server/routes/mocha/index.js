import twilio from "twilio";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";

import { roundOut, getPoem, setBalance, getBalance } from "./lib.js";

const router = express.Router();
dotenv.config();
const MessagingResponse = twilio.twiml.MessagingResponse;
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ---------------------
//     TWILIO ROUTES
// ---------------------

const mochaPrices = {
  S: 3.48,
  M: 3.96,
  L: 4.45
};

let orderBegun = false;
let storedSize = "";

router.post("/", async (req, res) => {
  const twiml = new MessagingResponse();

  let balance = getBalance();

  if (Object.keys(req.body).length === 0) {
    console.log("ERROR, NO MESSAGE");
  }

  const incomingText = req.body.Body.toString().toUpperCase();

  const expandedSize = {
    S: "Small",
    M: "Medium",
    L: "Large"
  };
  const unrecognizedMessage = () => {
    twiml.message(
      'Unrecognized message. Please send "MOCHA" or "POEM" to get started!'
    );
  };

  const endMessageChain = () => {
    storedSize = "";
    orderBegun = false;
  };

  const insufficientFunds = sizeText => {
    twiml.message(
      `There is not enough money left in your balance for a${
        sizeText ? " " + expandedSize[sizeText].toLowerCase() : ""
      } mocha! You can always request a haiku with "POEM", though!`
    );
    endMessageChain();
  };

  const orderMocha = sizeText => {
    sizeText = sizeText.toUpperCase();

    setBalance(roundOut(balance - mochaPrices[sizeText]));
    balance = getBalance();

    twiml.message(
      `${expandedSize[sizeText]} mocha ordered. Remaining balance: $${balance}. Now for some poetry to enjoy it with, just send "POEM"!`
    );

    twilioClient.messages.create({
      body: `Papa just ordered a mocha of size: ${sizeText}. He has $${balance} remaining.`,
      from: process.env.TWILIO_NUMBER,
      to: process.env.MY_NUMBER
    });

    endMessageChain();
  };

  const checkBalance = (sizeText, onError, onSuccess) => {
    const projectedBalance = roundOut(balance - mochaPrices[sizeText]);
    if (projectedBalance < 0) {
      onError(sizeText);
    } else {
      onSuccess(sizeText);
    }
  };

  if (incomingText === "MOCHA") {
    let sizeOptions = Object.keys(mochaPrices).filter(
      key => mochaPrices[key] < balance
    );

    if (sizeOptions.length === 0) {
      insufficientFunds();
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
      checkBalance(incomingText, insufficientFunds, orderMocha);
    } else {
      storedSize = incomingText;
      orderBegun = true;

      checkBalance(storedSize, insufficientFunds, () =>
        twiml.message(
          `Seems like you asked for a mocha size before beginning an order. Would you like to order a ${expandedSize[
            incomingText
          ].toLowerCase()} mocha anyway? (Y/N)`
        )
      );
    }
  } else if (incomingText === "Y") {
    if (orderBegun) {
      checkBalance(storedSize, insufficientFunds, orderMocha);
    } else {
      unrecognizedMessage();
    }
  } else if (incomingText === "N") {
    if (orderBegun) {
      twiml.message(
        'Ok, no mocha ordered. A "POEM" is always available, though!'
      );
      endMessageChain();
    } else {
      unrecognizedMessage();
    }
  } else if (incomingText === "POEM") {
    const poem = await getPoem();
    twiml.message(poem);
  } else {
    unrecognizedMessage();
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/mocha/test",
    method: "GET",
    status: "SUCCESS"
  });
});

// For altering the balance manually
router.post("/set-balance/:amount", (req, res) => {
  fs.writeFileSync(
    "./server/routes/mocha/balance.txt",
    parseFloat(req.params.amount)
  );
  res.send("SUCCESS");
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/mocha/test",
    method: "POST",
    status: "SUCCESS"
  });
});

export default router;
