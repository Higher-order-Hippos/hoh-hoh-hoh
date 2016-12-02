var db = require('../database/config');

module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryStr = 'select * from wishlists';
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },

    addOne: function(params, callback) {
      var queryStr = 'insert into wishlists (name) value (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
