const db = require('../database/config');

module.exports = {
  user: {
    findOne(params, callback) {
      const queryStr = 'SELECT username FROM users WHERE username = ? ';
      db.query(queryStr, (err, results) => {
        if(err) {
          console.log('Err in server/user/userModels.js findOne :', err);
        } else {
          callback(results);
        }
      })
    },

    addOne(params, callback) {
      const queryStr = 'INSERT INTO users (username, password) VALUE (?, ?)';
      db.query(queryStr, params, (err, results) => {
        if(err) {
          console.log('Err in server/user/userModels.js findOne :', err);
        } else {
          callback(results);
        }
      })
    },

    getPassword(params, callback) {
      const queryStr = 'SELECT password FROM users WHERE username = ? ';
      db.query(queryStr, (err, results) => {
        if(err) {
          console.log('Err in server/user/userModels.js findOne :', err);
        } else {
          callback(results);
        }
      })
    },

  }
}
