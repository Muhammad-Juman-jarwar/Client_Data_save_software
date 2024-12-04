// import { DataTypes, Model, Sequelize } from "sequelize";

// // Initialize the Client model
// export const initClientModel = (sequelize) => {
//   Client.init(
//     {
//       id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       middleName: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true,
//         },
//       },
//       emailPassword: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       dateOfBirth: {
//         type: DataTypes.DATE,
//         allowNull: false,
//       },
//       ssn: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           is: /^\d{3}-\d{2}-\d{4}$/,
//         },
//       },
//       phoneNumber: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       address: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       city: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       state: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       zip: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       driverLicense: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       driverLicenseIssueDate: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//       driverLicenseExpiryDate: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//       driverLicenseIssueState: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       occupation: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       yearlyIncome: {
//         type: DataTypes.FLOAT,
//         allowNull: true,
//         validate: {
//           min: 0,
//         },
//       },
//       monthlyHousingRent: {
//         type: DataTypes.FLOAT,
//         allowNull: true,
//         validate: {
//           min: 0,
//         },
//       },
//       creditScore: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//         validate: {
//           min: 0,
//         },
//       },
//       gender: {
//         type: DataTypes.ENUM("male", "female", "other"),
//         allowNull: false,
//       },
//       notes: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       status: {
//         type: DataTypes.ENUM("finished", "inprogress", "ready", "waiting"),
//         allowNull: true,
//         defaultValue: "waiting",
//       },
//     },
//     {
//       sequelize,
//       tableName: "clients",
//       timestamps: true,
//     }
//   );
// };

// export default Client;

const { DataTypes, Model } = require("sequelize");

// Declare the Client model class
class Client extends Model {}

// Initialize the Client model
const initClientModel = (sequelize) => {
  Client.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      emailPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ssn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^\d{3}-\d{2}-\d{4}$/,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      driverLicense: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      driverLicenseIssueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      driverLicenseExpiryDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      driverLicenseIssueState: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      yearlyIncome: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 0,
        },
      },
      monthlyHousingRent: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 0,
        },
      },
      creditScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
        },
      },
      gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("finished", "inprogress", "ready", "waiting"),
        allowNull: true,
        defaultValue: "waiting",
      },
    },
    {
      sequelize,
      tableName: "clients",
      timestamps: true,
    }
  );
};

module.exports = {
  Client,
  initClientModel,
};
