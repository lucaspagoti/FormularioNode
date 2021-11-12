const { Sequelize, Model } = require("sequelize");
const sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "lucas150695", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = connection;
