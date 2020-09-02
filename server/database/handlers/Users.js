import DatabaseHandler from "../DatabaseHandler";

class UsersDBHandler extends DatabaseHandler {
  filepath = "./server/database/data/users.txt";

  constructor() {
    super();

    // Clear users every time server restarts
    this.setUserCount(0);
  }

  setUserCount(newUserCount) {
    this.monoSet(this.filepath, newUserCount);
  }

  getUsers() {
    const data = this.getFirst(this.filepath);
    return this.formatData(data);
  }

  decrementUsers() {
    this.write(this.filepath, this.getUsers() - 1);
  }

  incrementUsers() {
    this.write(this.filepath, this.getUsers() + 1);
  }

  formatData(data) {
    return parseInt(data);
  }
}

export default UsersDBHandler;
