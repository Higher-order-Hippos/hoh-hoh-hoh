var db = require('../database/config');

module.exports = {
  items: {
    getAll: function(params, callback) {
      var queryStr = "SELECT items.name, items.id_wishlists FROM items INNER JOIN wishlists ON wishlists.name=? and wishlists.id=items.id_wishlists";
      // TODO In the future, may need to sanitize params to exclude special characters including double quotation marks
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/item/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
    })
  },

    addOne: function(params, callback) {
      var queryStr = 'INSERT INTO items (name, id_wishlists) VALUES (?, ?)'; //TODO how to convert wishlist name to wishlist ID??
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    renameItem: function(params, callback) {
      var queryStr = 'UPDATE items SET name=? WHERE name=?'; // TODO check please
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/item/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      })
    },

    deleteItem: function(params, callback) {
      var queryStr = 'DELETE FROM items WHERE name=?';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/item/wishlistModel.js deleteOne : ', err);
        } else {
          callback(results);
        }
      })
    }
  }

}
