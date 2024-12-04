// import { authenticateMiddleware } from '../middleware/authentication';
// import { ResetPasswordController, LoginController, SignUpController } from '../controller/authController';
// import express from 'express';

// const router = express.Router();

// router.post('/signup',SignUpController)

// router.post('/login',LoginController)

// router.patch('/reset-password',authenticateMiddleware,ResetPasswordController)

// export default router;

const { authenticateMiddleware } = require("../middleware/authentication");
const {
  ResetPasswordController,
  LoginController,
  SignUpController,
} = require("../controller/authController");
const express = require("express");

const router = express.Router();

router.post("/signup", SignUpController);

router.post("/login", LoginController);

router.patch(
  "/reset-password",
  authenticateMiddleware,
  ResetPasswordController
);

module.exports = router;
