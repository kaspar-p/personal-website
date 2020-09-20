import DatabaseHandler from "../DatabaseHandler.js";

class UsersDBHandler extends DatabaseHandler {
  filepath;

  constructor() {
    super();

    // Clear users every time server restarts
    this.setUserCount(0);

    this.filepath = "./server/database/data/users.txt";
  }

  setUserCount(newUserCount) {
    this.write(newUserCount);
  }

  getUsers() {
    const data = this.getFirst();
    return this.formatData(data);
  }

  decrementUsers() {
    this.write(this.getUsers() - 1);
  }

  incrementUsers() {
    this.write(this.getUsers() + 1);
  }

  formatData(data) {
    return parseInt(data);
  }
}

export default UsersDBHandler;
