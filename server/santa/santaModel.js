const db = require('../database/config_deploy');

module.exports = {
  createRoom: function(params, callback) {
    var queryStr = 'INSERT INTO santarooms (name) VALUE (?)';
    db.query(queryStr, params, function(err, results) {
      if(err) {
        console.log('Error in secret santa model create room function: ', err);
      }
      else {
        callback(results);
      }
    });
  }

  
}
