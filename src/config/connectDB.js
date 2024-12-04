// import mysql from "mysql2/promise";

// export const connectDB = async (mysqlConfig) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     console.log("Connected to MySQL");
//     return connection;
//   } catch (error) {
//     console.error("Error connecting to MySQL:", error);
//     throw error; // Ensure the error is propagated
//   }
// };

const mysql = require("mysql2/promise");

const connectDB = async (mysqlConfig) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    console.log("Connected to MySQL");
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw error; // Ensure the error is propagated
  }
};

module.exports = { connectDB };
