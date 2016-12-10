const mysql = require('mysql');

const DBconfig = require('./config.js') || {};

const connection = mysql.createConnection({
  host: DBconfig.host || process.env.DBhost,
  user: DBconfig.user || process.env.DBUser,
  password: DBconfig.password || process.env.DBpass,
  database: DBconfig.database || process.env.DB,
});

module.exports = connection;
