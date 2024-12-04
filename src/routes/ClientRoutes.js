// import {
//   addClient,
//   deleteClient,
//   getAllClients,
//   getClientById,
//   updateClient,
// } from "../controller/clientController";
// import { authenticateMiddleware } from "../middleware/authentication";
// import express from "express";

// const router = express.Router();

// router.post("/", authenticateMiddleware, addClient);
// router.get("/", authenticateMiddleware, getAllClients);
// router.get("/:id", authenticateMiddleware, getClientById);
// router.put("/:id", authenticateMiddleware, updateClient);
// router.delete("/:id", authenticateMiddleware, deleteClient);

// export default router;

const {
  addClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} = require("../controller/clientController");
const { authenticateMiddleware } = require("../middleware/authentication");
const express = require("express");

const router = express.Router();

router.post("/", authenticateMiddleware, addClient);
router.get("/", authenticateMiddleware, getAllClients);
router.get("/:id", authenticateMiddleware, getClientById);
router.put("/:id", authenticateMiddleware, updateClient);
router.delete("/:id", authenticateMiddleware, deleteClient);

module.exports = router;
