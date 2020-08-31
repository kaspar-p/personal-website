import fs from "fs";

const userCountPath = "./server/users.txt";

class UserCount {
  static getUsers() {
    const data = fs.readFileSync(userCountPath, "UTF-8");
    return data.split("\n")[0];
  }

  static decrementUsers() {
    this.writeValue(this.getUsers() - 1);
  }

  static incrementUsers() {
    this.writeValue(this.getUsers() + 1);
  }

  writeValue(newValue) {
    fs.writeFileSync(userCountPath, newValue);
  }
}

export default UserCount;
