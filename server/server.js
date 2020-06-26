import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import socketInitializer from "socket.io";

import routes from "./routes.js";
import { beginInterval, endInterval } from "./lib.js";

// Production will inject a port, undefined if in development mode
const PORT = process.env.PORT || 1111;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("SERVER RUNNING IN: ", process.env.NODE_ENV);

const buildPath = path.join(__dirname, "../", "client", "build");

const app = express();

// Config
app.use(bodyparser.json()); // Before routes
app.use("/api", routes);
if (process.env.NODE_ENV === "production") {
  // Before, for CSS and other styles
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    let url = path.join(buildPath, "index.html");
    if (!url.startsWith("/app/"))
      // we're on local windows
      url = url.substring(1);
    res.sendFile("/index.html", { root: buildPath });
  });
}
dotenv.config();
let itvl;

const server = app.listen(PORT, () =>
  console.log(
    `Server running successfully at port: ${PORT} from ${__dirname} and build: ${buildPath}`
  )
);

// Bind socket.io to the server
const io = socketInitializer(server, { serveClient: false });

// ----------------------------------
//     SOCKET.IO EVENTS & ROUTES
// ----------------------------------

let numUsers = 0;
io.on("connection", async socket => {
  numUsers++;
  console.log("USER CONNECTED! TOTAL: ", numUsers);

  if (numUsers === 1) {
    // The first user connected, begin the loop
    await beginInterval(itvl);
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${used} MB`);
  }

  socket.on("disconnect", () => {
    numUsers--;
    console.log("USER DISCONNECTED! TOTAL: ", numUsers);

    if (numUsers === 0) {
      endInterval(itvl);
    }
  });
});

// -------------------------------
//     DATABASE INITIALIZATION
// -------------------------------

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
  });

  console.log("Database securely connected");
} catch (error) {
  console.log("Database connection not established! Error occurred!");
  console.log(error);
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
