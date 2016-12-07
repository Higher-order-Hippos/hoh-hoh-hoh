const db = require('../database/config_deploy');

module.exports = {
  wishlists: {
    getAll(callback) {
      const queryStr = 'SELECT name, id FROM wishlists';
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
      });
    },

    addOne(params, callback) {
      const queryStr = 'INSERT INTO wishlists (name) VALUE (?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js addOne : ', err);
        } else {
          callback(results);
        }
      });
    },

    renameList(params, callback) {
      const queryStr = 'UPDATE wishlists SET name=? WHERE id=?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      });
    },

    deleteList(params, callback) {
      const queryStr = 'DELETE FROM items WHERE id_wishlists = ?';
      const queryStr2 = 'DELETE FROM wishlists WHERE id = ?';
      db.query(queryStr, params, (err) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js deleteOne : ', err);
        } else {
          db.query(queryStr2, params, (err, results) => {
            if (err) {
              console.log('Error in server/wishlist/wishlistModel.js deleting wishlist: ', err);
            } else {
              callback(results);
            }
          });
        }
      });
    },
  },

};
