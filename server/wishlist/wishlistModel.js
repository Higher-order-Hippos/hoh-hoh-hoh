var db = require('../db'); //TODO wherever our DB folder is set


module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryString = 'select * from wishlists';

      db.query(queryString, function(err, results){
        callback(err, results);
      })
    }
  }

}
