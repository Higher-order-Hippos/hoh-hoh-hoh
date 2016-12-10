const db = require('../database/config_deploy');

// Query in the wishlist table in the database to add, delete, rename, and get wishlist.

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
      // The getAll function accepts a callback as a parameter.
      // It makes a query to get the name and id from the wishlist table in the db
      // and pass the result to the wishlist controller.
    },

    getByUser(params, callback) {
      const queryStr = 'SELECT name, id FROM wishlists WHERE user_id = ?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModels.js getByUser : ', err);
        } else {
          callback(results);
        }
      });
    },

    addOne(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in
      const queryStr = 'INSERT INTO wishlists (name, user_id) VALUE (?, ?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('Error in server/wishlist/wishlistModel.js addOne : ', err);
        } else {
          callback(results);
        }
      });
      // addOne takes a callback and params where params is the data that is
      // entered by the user in the wishlist form.
      // The function adds the information entered by the user in the database.
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
      // The renameList function allows the user to rename a list.
      // The function makes a query to the database and updates the name of the list
      // in the database with the params argument which is provided by the user.
    },

    deleteList(params, callback) {
      //save query string in separate var to pass into database query, question marks denote params being passed in
      //stacked queries for deleting an entire wishlist. Items that the wishlist contains must be deleted before the wishlist is dropped
      //or else you'll have issues with wishlistIds referring to a non existent wishlist.
      //delete items first, then delete wishlist.
      const queryStr = 'DELETE FROM items WHERE wishlist_id = ?';
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
      // deleteList makes a query into the database and deletes a list that the user no longer wants.
    },
  },

};
