import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";
// import dotenv from "dotenv";
// require('dotenv').config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/quickmeet";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const start = async () => {
  // app.set("mongo_user");
  const connectionDb = await mongoose
    .connect("mongodb+srv://amitseju04:amitseju100@quickmeetcluster.nl00clt.mongodb.net/")
    .catch((err) => console.error(err));

  console.log("MongoDB is  connected successfully");
  console.log(`MONGO Connected DB NAME: ${connectionDb.connection.name}`);
  console.log(`MONGO Connected DB HOST: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("SERVER IS LISTENIN ON PORT 8000");
  });
};

start();
