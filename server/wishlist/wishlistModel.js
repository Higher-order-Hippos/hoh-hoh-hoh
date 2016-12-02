var db = require('../database/config');

module.exports = {
  wishlists: {
    getAll: function(callback) {
      var queryStr = 'select name from wishlists'
      db.query(queryStr, function(err, results) {
        if (err) {
          console.log('Error in server/wishlistModels.js getAll : ', err);
        } else {
          callback(results);
        }
      })

    },

    addOne: function(params, callback) {
      var queryStr = 'insert into wishlists (name) value (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          console.log('Error in server/wishlistModel.js addOne : ', err)
        } else {
          callback(results);
        }
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
