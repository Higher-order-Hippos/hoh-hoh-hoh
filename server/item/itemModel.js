var db = require('../database/config');

module.exports = {
  items: {
    getAll: function(params, callback) {
      var queryStr = "SELECT items.name FROM items INNER JOIN wishlists ON wishlists.name=? and wishlists.id=items.id_wishlists";
      // TODO In the future, may need to sanitize params to exclude special characters including double quotation marks
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
    })
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
