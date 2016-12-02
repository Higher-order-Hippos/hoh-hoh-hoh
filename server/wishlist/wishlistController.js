var wishlistModel = require('./wishlistModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      wishlistModel.wishlists.getAll(function(results) {
        res.json(results);
      });
    },
    
    post: function (req, res) {
      var params = req.body.name; // TODO whatever wishlist data that are being posted
      wishlistModel.wishlists.addOne(params, function() {
        res.sendStatus(201);
      });
    }
  },

}
