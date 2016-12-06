const db = require('../database/config');

module.exports = {
  user: {
    findOne(params, callback) {
      const queryStr = 'SELECT name FROM users';
      db.query(queryStr, (err, results) => {
        if(err) {
          console.log('Err in server/user/userModels.js findOne :', err);
        } else {
          callback(results);
        }
      })
    },

    addOne(params, callback) {
      const queryStr = 'INSERT INTO users (name) VALUE (?)';
      db.query(queryStr, params, (err, results) => {
        if(err) {
          console.log('Err in server/user/userModels.js findOne :', err);
        } else {
          callback(results);
        }
      })
    }
  }
}
