import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";
import compression from "compression";
import socketInitializer from "socket.io";

import routes from "./routes/index.js";
//import { Users } from "./database/index.js";
//import { beginInterval, endInterval } from "./lib.js";

// Production will inject a port, undefined if in development mode
const PORT = process.env.PORT || 1111;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("SERVER RUNNING IN: ", process.env.NODE_ENV);

const buildPath = path.join(__dirname, "../", "client", "build");

const app = express();

// ---------------------
//     CONFIGURATION
// ---------------------
dotenv.config();
app.use(compression());
app.use(bodyParser.json()); // Before routes
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  // Before, for CSS and other styles
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    let url = path.join(buildPath, "index.html");
    if (!url.startsWith("/app/")) url = url.substring(1);
    res.sendFile("/index.html", { root: buildPath });
  });
}

// ----------------------------------
//     CONNECT TO THE DATABASE
// ----------------------------------
// const connection = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });
const connection = mysql.createConnection({
  host: process.env.MYSQL_ENDPOINT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL database!");
    console.error(error);
  }
  console.log("Successfully connected to the database!");
  con.end();
});

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

let interval;

io.on("connection", async (socket) => {
  // Users.incrementUsers();
  // console.log("USER CONNECTED! TOTAL: ", Users.getUsers());
  // if (Users.getUsers() === 1) {
  //   // The first user connected, begin the loop
  //   await beginInterval(interval);
  // }
  // socket.on("disconnect", () => {
  //   Users.decrementUsers();
  //   console.log("USER DISCONNECTED! TOTAL: ", Users.getUsers());
  //   if (Users.getUsers() === 0) {
  //     endInterval(interval);
  //   }
  // });
  console.log("user connected");
});
