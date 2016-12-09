const db = require('../database/config_deploy');

module.exports = {
  createRoom: function(params, callback) {
    var queryStr = 'INSERT INTO santarooms (name) VALUE (?)';
    db.query(queryStr, params, function(err, results) {
      console.log('THIS IS THE PARAMS IN CREATEROOM QUERY: ', params);
      if(err) {
        console.log('Error in secret santa model create room function: ', err);
      }
      else {
        console.log('THIS IS THE RESULTS IN CREATEROOM QUERY: ', results);
        callback(results);
      }
    });
  }


}
