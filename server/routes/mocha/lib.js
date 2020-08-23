import axios from "axios";
import fs from "fs";

/**
 * Uses PoetryDB from https://github.com/thundercomb/poetrydb to get a random poem.
 * @returns {String}
 */
export const getPoem = async () => {
  let data;
  let responseSuccess = false;

  while (responseSuccess === false) {
    const response = await axios.get("https://poetrydb.org/random/10");

    let chosenPoem = {};
    for (let poem of response.data) {
      if (poem.linecount <= 30) {
        chosenPoem = poem;
        break;
      }
    }

    if (Object.keys(chosenPoem) !== 0) {
      data = chosenPoem;
      break;
    }
  }

  const formattedPoem = `\n${data.title}\nBy ${
    data.author
  }\n\n${data.lines.join("\n")}`;

  return formattedPoem;
};

export const setBalance = newBalance => {
  fs.writeFileSync(balanceFilePath, newBalance);
};

export const getBalance = () => {
  const data = fs.readFileSync(balanceFilePath, "UTF-8");
  const firstRow = data.split("\n")[0];
  const balance = roundOut(parseFloat(firstRow));

  return balance;
};

export const balanceFilePath = "./server/routes/mocha/balance.txt";

export const roundOut = n => Math.round(n * 100) / 100;
