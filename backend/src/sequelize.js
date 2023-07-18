const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const databaseConfig = require("./configs/database.config.js")[env];

module.exports = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  }
);
