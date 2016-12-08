const db = require('../database/config_deploy');

module.exports = {
  wishlists: {
    getAll(callback) {
      //save query string in separate var to pass into database query
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
      //save query string in separate var to pass into database query, question marks denote params being passed in
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
      //save query string in separate var to pass into database query, question marks denote params being passed in, multiple params requires an array
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
      //save query string in separate var to pass into database query, question marks denote params being passed in
      //stacked queries for deleting an entire wishlist. Items that the wishlist contains must be deleted before the wishlist is dropped
      //or else you'll have issues with wishlistIds referring to a non existent wishlist.
      //delete items first, then delete wishlist.
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
