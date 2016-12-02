var wishlistModel = require('./wishlistModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      wishlistModel.wishlists.getAll(function(err, results) {
        if (err) {
          console.log('Server-side GET request error : ', err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.name]; // TODO whatever wishlist data that are being posted
      wishlistModel.wishlists.addOne(params, function(err, results) {
        if (err) {
          console.log('Server-side POST request error : ', err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

}
