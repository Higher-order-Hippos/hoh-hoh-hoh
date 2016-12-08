const db = require('../database/config_deploy');

module.exports = {
  items: {
    getAll(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in
      const queryStr = 'SELECT name, id FROM items WHERE wishlists_id = ?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
      });
    },

    addOne(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in
      const queryStr = 'INSERT INTO items (name, wishlists_id) VALUES (?, ?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js addOne : ', err);
        } else {
          callback(results);
        }
      });
    },

    renameItem(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in, can be multiple
      const queryStr = 'UPDATE items SET name=? WHERE id=?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/item/wishlistModel.js renameList : ', err);
        } else {
          callback(results);
        }
      });
    },

    deleteItem(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in
      const queryStr = 'DELETE FROM items WHERE id = ?';
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
