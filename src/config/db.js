const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "myentffu_zigenare",
  "myentffu_zigenare",
  "(,1)d6pd$4(*",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;

// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("Management-system", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize;
