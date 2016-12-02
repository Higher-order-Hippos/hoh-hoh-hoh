var db = require('../database/config');

module.exports = {
  items: {
    getAll: function(callback) {
      var queryStr = 'SELECT items.name FROM items INNER JOIN wishlists ON items.id_wishlists=wishlists.id';
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },

    addOne: function(params, callback) {
      var queryStr = 'INSERT INTO items (name, wishlistId) VALUES (?, ?)'; //TODO how to convert wishlist name to wishlist ID??
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
