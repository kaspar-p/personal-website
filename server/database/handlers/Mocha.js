import DatabaseHandler from "../DatabaseHandler.js";
import { roundOut } from "../../routes/mocha/lib.js";

class MochaDBHandler extends DatabaseHandler {
  filepath = "./server/database/data/balance.txt";

  constructor() {
    super();
  }

  setBalance(newBalance) {
    this.write(this.filepath, newBalance);
  }

  getBalance() {
    const data = this.getFirst(this.filepath);
    return this.formatData(data);
  }

  formatData(data) {
    return roundOut(parseFloat(data));
  }
}

export default MochaDBHandler;
