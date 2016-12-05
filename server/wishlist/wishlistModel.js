var db = require('../database/config');


module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryStr = 'SELECT name, id FROM wishlists'
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
      var queryStr = 'UPDATE wishlists SET name=? WHERE id=?';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      })
    },

    deleteList: function(params, callback) {
      var queryStr = 'DELETE FROM items WHERE id_wishlists = ?';
      var queryStr2 = 'DELETE FROM wishlists WHERE id = ?';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js deleteOne : ', err);
        } else {
          db.query(queryStr2, params, function(err, results) {
            if (err) {
              console.log('Error in server/wishlist/wishlistModel.js deleting wishlist: ', err)
            } else {
              callback(results);
            }
          });
        }
      });
    },
  },

};
