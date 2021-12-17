import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import compression from "compression";
import socketInitializer from "socket.io";
import enforce from "express-sslify";

import routes from "./routes/index.js";
import {
  // incrementUser,
  // decrementUser,
  endInterval,
  beginInterval,
} from "./lib.js";

// Production will inject a port, undefined if in development mode
const PORT = process.env.PORT || 1111;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("SERVER RUNNING IN: ", process.env.NODE_ENV);

const buildPath = path.join(__dirname, "../", "client", "build");

const app = express();

// ---------------------
//     CONFIGURATION
// ---------------------
app.use(enforce.HTTPS({ trustProtoHeader: true }));
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

// -------------------------------
//     DATABASE INITIALIZATION
// -------------------------------

try {
  mongoose.connect(process.env.MONGO_DATABASE_URL, {
    useNewUrlParser: true,
  });

  console.log("Database securely connected");
} catch (error) {
  console.log("Database connection not established! Error occurred!");
  console.log(error);
}

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
let count = 0;

io.on("connection", async (socket) => {
  // await incrementUser();
  count++;
  console.log("USER CONNECTED! TOTAL: ", count);
  if (count === 1) {
    // The first user connected, begin the loop
    await beginInterval(interval);
    // interval = setInterval(() => console.log(Date.now()), 1000);
  }

  socket.on("disconnect", async () => {
    // await decrementUser();
    count--;
    console.log("USER DISCONNECTED! TOTAL: ", count);
    if (count === 0) {
      endInterval(interval);
      clearInterval(interval);
    }
  });
});

io.on("disconnect", async () => {
  console.log("DISCONNECTING");
  count--;
});

io.on("error", (error) => console.log(error));
