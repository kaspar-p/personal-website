import fs from "fs";

class DatabaseHandler {
  getAll(filepath) {
    const data = fs.readFileSync(filepath, "UTF-8");
    return data;
  }

  getFirst(filepath) {
    const data = fs.readFileSync(filepath, "UTF-8");
    const result = data.split("\n").shift();
    return result;
  }

  append(filepath, data) {
    fs.appendFileSync(filepath, data + "\n");
  }

  write(filepath, data) {
    fs.writeFileSync(filepath, data.toString());
  }

  // Empty to be overridden by the various children that each know
  // how they want to deal with their attributes and data
  formatData(data) {
    return data;
  }
}

export default DatabaseHandler;
