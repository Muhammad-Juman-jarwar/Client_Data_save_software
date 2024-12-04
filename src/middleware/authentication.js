// import jwt from "jsonwebtoken";

// export const authenticateMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Access token is required" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
//     req.body.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "Invalid token" });
//   }
// };

const jwt = require("jsonwebtoken");

const authenticateMiddleware = (req, res, next) => {
  // const token = req.headers.authorization?.split(" ")[1];
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.body.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = {
  authenticateMiddleware,
};
