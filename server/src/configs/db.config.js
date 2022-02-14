const { Sequelize } = require("sequelize");

let DB_NAME = process.env.DB_NAME || "movie-ticket-booking";
let DB_USERNAME = process.env.DB_USERNAME || "root";
let DB_PASSWORD = process.env.DB_PASSWORD || null;
let DB_HOST = process.env.DB_HOST || "localhost";

let connectDB = async () => {
  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
  });

  try {
    await sequelize.authenticate();
    console.log("Connection to DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
