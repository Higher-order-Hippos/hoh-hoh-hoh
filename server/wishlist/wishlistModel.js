var db = require('../db'); //TODO wherever our DB folder is set

module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryStr = 'select * from wishlists'; // or whatever the table name is
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },

    addOne: function(params, callback) {
      var queryStr = 'insert into wishlists (TO_BE_FILLED) value (?)'; // or whatever the table colum name is
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
