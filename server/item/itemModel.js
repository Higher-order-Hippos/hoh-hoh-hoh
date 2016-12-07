const db = require('../database/config_deploy');

module.exports = {
  items: {
    getAll(params, callback) {
      const queryStr = 'SELECT name, id FROM items WHERE id_wishlists = ?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
          db.end();
        }
      });
    },

    addOne(params, callback) {
      const queryStr = 'INSERT INTO items (name, id_wishlists) VALUES (?, ?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js addOne : ', err);
        } else {
          callback(results);
          db.end();
        }
      });
    },

    renameItem(params, callback) {
      const queryStr = 'UPDATE items SET name=? WHERE id=?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
          db.end();
        }
      });
    },

    deleteItem(params, callback) {
      const queryStr = 'DELETE FROM items WHERE id = ?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js deleteOne : ', err);
        } else {
          callback(results);
          db.end();
        }
      });
    },
  },
};
