const db = require('../database/config_deploy');
const userModel = require('../user/userModel');

module.exports = {
  addOne(params, callback) {
    // TODO: Add validation if user exists before creating session
    const queryStr = 'INSERT INTO sessions (token, user_id) VALUES (?, ?)';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        console.log('Error in server/sessionModel.js addOne : ', err);
      } else {
        callback(results);
      }
    });
  },

  getSession(params, callback) {
    const queryStr = 'SELECT * FROM sessions WHERE token = ?';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        console.log('Error in server/sessionModel.js getSession : ', err);
      } else {
        callback(results);
      }
    });
  },

  getSessionUser(params, callback) {
    this.getSession(params, (results) => {
      if (results.length >= 1) {
        userModel.users.getUser(results[0].user_id, callback);
      } else {
        callback({
          error: 'cannot get session'
        });
      }
    });
  },
};
