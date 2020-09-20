import fs from "fs";

class DatabaseHandler {
  // Each child class will override for their own filepath
  filepath = "";

  getAll() {
    const data = fs.readFileSync(this.filepath, "UTF-8");
    return data;
  }

  getFirst() {
    const data = fs.readFileSync(this.filepath, "UTF-8");
    const result = data.split("\n").shift();
    return result;
  }

  append(data) {
    fs.appendFileSync(this.filepath, data + "\n");
  }

  write(data) {
    fs.writeFileSync(this.filepath, data.toString());
  }

  // Empty to be overridden by the various children that each know
  // how they want to deal with their attributes and data
  formatData(data) {
    return data;
  }
}

export default DatabaseHandler;
