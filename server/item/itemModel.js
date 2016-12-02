var db = require('../database/config');

module.exports = {
  items: {
    getAll: function(callback) {
      var queryStr = 'select name from items where wishlistId = ';
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },

    addOne: function(params, callback) {
      var queryStr = 'insert into items (name, wishlistId) values (?, ?)'; // TODO how do we grab wishlistId from wishlist name?
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
