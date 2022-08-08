const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
console.log("testDB");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log("DB is not connected" + err.message);
    throw err;
  } else {
    console.log("DB is connected," + " DB Status: " + connection.state);
  }
});

module.exports = connection;
