const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "";
const API_KEY = process.env.API_KEY || "";
const NODE_ENV = process.env.NODE_ENV || "development";
const JWT_SECRET = process.env.JWT_SECRET || "";

module.exports = {
  PORT,
  DATABASE_URL,
  API_KEY,
  NODE_ENV,
  JWT_SECRET,
};
