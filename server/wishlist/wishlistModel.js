var db = require('../database/config');


module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryStr = 'SELECT name FROM wishlists'
      db.query(queryStr, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
      })

    },

    addOne: function(params, callback) {
      var queryStr = 'INSERT INTO wishlists (name) VALUE (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js addOne : ', err)
        } else {
          callback(results);
        }
      });
    },

    renameList: function(params, callback) {
      var queryStr = 'UPDATE wishlists SET name=? WHERE name=?'; // TODO check please
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      })
    },

    deleteOne: function(params, callback) {
      var queryStr = 'DELETE FROM wishlists WHERE name=?';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js deleteOne : ', err);
        } else {
          callback(results);
        }
      })
    }
  }

}
