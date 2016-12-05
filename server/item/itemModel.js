const db = require('../database/config');

module.exports = {
  items: {
    getAll(params, callback) {
      const queryStr = "SELECT name FROM items WHERE id_wishlists = ?";
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
      });
    },

    addOne (params, callback) {
      const queryStr = 'INSERT INTO items (name, id_wishlists) VALUES (?, ?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      });
    },

    renameItem (params, callback) {
      const queryStr = 'UPDATE items SET name=? WHERE name=?'; // TODO check please
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      });
    },

    deleteItem (params, callback) {
      const queryStr = 'DELETE FROM items WHERE name=?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js deleteOne : ', err);
        } else {
          callback(results);
        }
      });
    },
  },
};
