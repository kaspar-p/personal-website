import DatabaseHandler from "../DatabaseHandler.js";
import { roundOut } from "../../routes/mocha/lib.js";

class MochaDBHandler extends DatabaseHandler {
  filepath;

  constructor() {
    super();
    this.filepath = "./server/database/data/balance.txt";
  }

  setBalance(newBalance) {
    this.write(newBalance);
  }

  getBalance() {
    const data = this.getFirst();
    return this.formatData(data);
  }

  formatData(data) {
    return roundOut(parseFloat(data));
  }
}

export default MochaDBHandler;
