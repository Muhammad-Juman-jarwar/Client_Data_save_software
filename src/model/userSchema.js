// import { DataTypes, Model, Sequelize } from "sequelize";

// // Initialize the User model
// export const initUserModel = (sequelize) => {
//   User.init(
//     {
//       id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true, // Validates email format
//         },
//       },
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: "users",
//       timestamps: true, // Automatically manages createdAt and updatedAt
//     }
//   );
// };

// export default User;

const { DataTypes, Model } = require("sequelize");

// Define the User model
class User extends Model {}

// Initialize the User model
const initUserModel = (sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validates email format
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: true, // Automatically manages createdAt and updatedAt
    }
  );

  return User; // Return the initialized model
};

module.exports = {
  initUserModel,
};
