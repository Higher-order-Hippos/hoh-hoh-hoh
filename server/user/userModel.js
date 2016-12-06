const db = require('../database/config');

module.exports = {
  users: {

    addOne(params, callback) {
      const queryStr = "INSERT INTO users (username, password) VALUES (?, ?)";
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/userModel.js addOne : ', err);
        } else {
          console.log('RESULTS IN USER MODEL ADD ONE : ', results);
          callback(results);
        }
      })
    },

    getPassword(params, callback) {
      const queryStr = "SELECT password FROM users";
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/userModel.js getPassword : ', err);
        } else {
          console.log('RESULTS IN USER MODEL GET PASSWORD : ', results);
          callback(results);
        }
      })
    },

  }
}
