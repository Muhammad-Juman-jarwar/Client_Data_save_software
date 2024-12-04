// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../model/userSchema"; // Sequelize User model

// const generateJWTtoken = (id) => {
//   const token = jwt.sign({ userId: id }, process.env.JWT_SECRET || "secret", {
//     expiresIn: "7d",
//   });

//   return token;
// };

// export const SignUpController = async (req, res) => {
//   const { email, username, password, confirmPassword } = req.body;

//   if (!email || !username || !confirmPassword || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     // Check if passwords match
//     if (confirmPassword !== password) {
//       return res
//         .status(401)
//         .json({ message: "Confirm Password and password do not match" });
//     }

//     // Check if email or username already exists
//     const existingUser = await User.findOne({
//       where: { email },
//     });

//     if (existingUser) {
//       return res.status(409).json({ message: "Email must be unique" });
//     }

//     const existingUsername = await User.findOne({
//       where: { username },
//     });

//     if (existingUsername) {
//       return res.status(409).json({ message: "Username must be unique" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await User.create({
//       email,
//       username,
//       password: hashedPassword,
//     });

//     const token = generateJWTtoken(user.id);

//     // Avoid returning the password in the response
//     res.status(200).json({
//       message: "User Registered Successfully",
//       user: { id: user.id, email: user.email, username: user.username },
//       accessToken: token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const LoginController = async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: "Username and password are required" });
//   }

//   try {
//     const user = await User.findOne({
//       where: { username },
//     });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Generate JWT token
//     const token = generateJWTtoken(user.id);

//     // Avoid returning the password in the response
//     res.status(200).json({
//       message: "Login successful",
//       user: { id: user.id, email: user.email, username: user.username },
//       accessToken: token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const ResetPasswordController = async (req, res) => {
//   const { password, userId } = req.body;

//   if (!password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;

//     await user.save();

//     res.status(200).json({ message: "Password changed successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema"); // Sequelize User model

const generateJWTtoken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET || "secret", {
    expiresIn: "7d",
  });

  return token;
};

const SignUpController = async (req, res) => {
  const { email, username, password, confirmPassword } = req.body;

  if (!email || !username || !confirmPassword || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if passwords match
    if (confirmPassword !== password) {
      return res
        .status(401)
        .json({ message: "Confirm Password and password do not match" });
    }

    // Check if email or username already exists
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email must be unique" });
    }

    const existingUsername = await User.findOne({
      where: { username },
    });

    if (existingUsername) {
      return res.status(409).json({ message: "Username must be unique" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = generateJWTtoken(user.id);

    // Avoid returning the password in the response
    res.status(200).json({
      message: "User Registered Successfully",
      user: { id: user.id, email: user.email, username: user.username },
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const LoginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const token = generateJWTtoken(user.id);

    // Avoid returning the password in the response
    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, email: user.email, username: user.username },
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const ResetPasswordController = async (req, res) => {
  const { password, userId } = req.body;

  if (!password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  SignUpController,
  LoginController,
  ResetPasswordController,
};
