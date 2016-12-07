const db = require('../database/config');

module.exports = {
  users: {
    addOne(params, callback) {
      const queryStr = "INSERT INTO users (username, password) VALUES (?, ?)";
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/userModel.js addOne : ', err);
        } else {
          callback(results);
        }
      });
    },

    getPassword(params, callback) {
      const queryStr = "SELECT password FROM users WHERE username = ?";
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/userModel.js getPassword : ', err);
        } else {
          callback(results);
        }
      });
    },
  },
};
