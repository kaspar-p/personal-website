import DatabaseHandler from "../DatabaseHandler.js";
import _ from "lodash";

class UpdateDBHandler extends DatabaseHandler {
  filepath = "./server/database/data/updates.txt";
  updates = {};

  constructor() {
    super();

    const data = this.getAll(this.filepath);
    this.updates = this.formatRawData(data);
  }

  formatRawData(data) {
    const rows = data.split("\n");
    let updateObjects = {};

    rows.forEach((row, index) => {
      // Skip the headers row
      if (index !== 0 && row !== "") {
        const items = row.split("|");
        let id = items[0];

        updateObjects[id] = {};
        updateObjects[id]["updateID"] = id;
        updateObjects[id]["title"] = items[1];
        updateObjects[id]["desc"] = items[2];
        updateObjects[id]["date"] = new Date(items[3]).toLocaleDateString();
        updateObjects[id]["time"] = new Date(items[3]).toLocaleTimeString();
        updateObjects[id]["isCommit"] = items[4];
        updateObjects[id]["commitURL"] = items[5];
      }
    });

    return updateObjects;
  }

  /**
   * Creates a commit in the DB
   * @param {Object}  update
   * @param {String}  update.title
   * @param {String}  update.desc
   * @param {Date}    update.date
   * @param {Boolean} update.isCommit
   * @param {String}  update.commitURL
   */
  create(update) {
    let dataArray = [
      this.makeUpdateID(),
      update.title,
      update.desc,
      update.date,
      update.isCommit,
      update.commitURL,
    ];

    const formattedData = dataArray.join("|");
    this.append(this.filepath, formattedData);
  }

  exists(updateID) {
    return Object.keys(this.updates)
      .map((e) => e.toString())
      .includes(updateID);
  }

  getSortedUpdates() {
    let sortedArr = Object.keys(this.updates).sort((a, b) => {
      let d1 = this.updates[a].date;
      let d2 = this.updates[b].date;

      return new Date(d2) - new Date(d1);
    });

    let reconstructedObjects = {};
    sortedArr.forEach((id) => {
      reconstructedObjects[id] = this.updates[id];
    });

    return reconstructedObjects;
  }

  makeUpdateID() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    let builtID = "";
    _.times(5, () => (builtID += alphabet[Math.round(Math.random() * 26)]));

    return builtID;
  }
}

export default UpdateDBHandler;
