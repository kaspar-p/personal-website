import CommitDatabaseHandler from "./handlers/Commit.js";
import UpdateDatabaseHandler from "./handlers/Update.js";
import MochaDatabaseHandler from "./handlers/Mocha.js";
import UsersDatabaseHandler from "./handlers/Users.js";

export const Commit = new CommitDatabaseHandler();
export const Update = new UpdateDatabaseHandler();
export const Mocha = new MochaDatabaseHandler();
export const Users = new UsersDatabaseHandler();
