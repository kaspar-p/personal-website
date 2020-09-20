import DatabaseHandler from "../DatabaseHandler.js";

class CommitDBHandler extends DatabaseHandler {
  filepath;
  commits = {};

  constructor() {
    super();
    const data = this.getAll();
    this.filepath = "./server/database/data/commits.txt";
    this.commits = this.formatRawData(data);
  }

  formatRawData(data) {
    const rows = data.split("\n");
    let commitObjects = {};

    rows.forEach((row, index) => {
      // Skip the headers row
      if (index !== 0 && row !== "") {
        // Initialize with ID

        const items = row.split("|");
        let id = items[0];

        commitObjects[id] = {};
        commitObjects[id]["url"] = id;
        commitObjects[id]["message"] = items[1];
        commitObjects[id]["authorName"] = items[2];
        commitObjects[id]["authorEmail"] = items[3];
        commitObjects[id]["authorDate"] = items[4];
      }
    });

    return commitObjects;
  }

  /**
   * Creates a commit in the DB
   * @param {Object} commit
   * @param {String} commit.url
   * @param {String} commit.message
   * @param {Object} commit.author
   */
  create(commit) {
    let dataArray = [
      commit.url,
      commit.message,
      commit.author.name,
      commit.author.email,
      commit.author.date,
    ];

    const formattedData = dataArray.join("|");
    this.append(formattedData);
  }

  exists(commitID) {
    return Object.keys(this.commits)
      .map((e) => e.toString())
      .includes(commitID);
  }
}

export default CommitDBHandler;
