const mysql = require('mysql');

const pw = process.env.key || require('./pw.js');  //pw stored on heroku as config var, contact HoH for access

const connection = mysql.createConnection({
  host: 'mysqlcluster2.registeredsite.com',
  user: 'hohohadmin',
  password: pw,
  database: 'hohohoh',
});

module.exports = connection;
