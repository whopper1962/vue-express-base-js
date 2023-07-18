const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");


const User = sequelize.define(
  "Users",
  {
    id:{
      type:DataTypes.INTEGER,
      defaultValue:Sequelize.id,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = User;
