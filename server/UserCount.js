import fs from "fs";

const userCountPath = "./server/users.txt";

class UserCount {
  static getUsers() {
    const data = fs.readFileSync(userCountPath, "UTF-8");
    return data.split("\n")[0];
  }

  static decrementUsers() {
    UserCount.writeValue(UserCount.getUsers() - 1);
  }

  static incrementUsers() {
    UserCount.writeValue(UserCount.getUsers() + 1);
  }

  static writeValue(newValue) {
    fs.writeFileSync(userCountPath, newValue);
  }
}

export default UserCount;
