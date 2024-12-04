// import dotenv from "dotenv";
// import express from "express";
// import http from "http";
// import bodyParser from "body-parser";
// import cors from "cors";
// import path from "path";
// import sequelize from "./config/db";
// import { initClientModel } from "./model/clientSchema";
// import AuthRoutes from "./routes/AuthRoutes";
// import ClientRoutes from "./routes/ClientRoutes";
// import { initUserModel } from "./model/userSchema";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(
//   cors({
//     credentials: true,
//   })
// );

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// const server = http.createServer(app);

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connected to MySQL");

//     initClientModel(sequelize);
//     initUserModel(sequelize);

//     await sequelize.sync({ alter: true });
//     console.log("Database synced");
//   } catch (error) {
//     console.error("Error connecting to MySQL:", error);
//     process.exit(1);
//   }
// })();

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.use("/auth", AuthRoutes);
// app.use("/client", ClientRoutes);

const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const sequelize = require("./config/db");
const { initClientModel } = require("./model/clientSchema");
const { initUserModel } = require("./model/userSchema");
const AuthRoutes = require("./routes/AuthRoutes");
const ClientRoutes = require("./routes/ClientRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
    origin:"https://myenterprises.net/"
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL");

    initClientModel(sequelize);
    initUserModel(sequelize);

    await sequelize.sync({ alter: true });
    console.log("Database synced");
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    process.exit(1);
  }
})();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/auth", AuthRoutes);
app.use("/client", ClientRoutes);
