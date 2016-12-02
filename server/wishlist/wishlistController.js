var models = require('./wishlistModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      models.wishlists.getAll(function(err, results) {
        if (err) {
          console.log('GET request error : ', err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [TO_BE_FILLED]; // wishlist data being posted
      models.wishlists.addOne(params, function(err, results) {
        if (err) {
          console.log('POST request error : ', err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

}
