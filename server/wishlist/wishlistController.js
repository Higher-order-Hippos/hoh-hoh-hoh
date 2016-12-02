var wishlistModel = require('./wishlistModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      wishlistModel.wishlists.getAll(function(results) {
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = req.body.name;
      wishlistModel.wishlists.addOne(params, function() {
        res.sendStatus(201);
      });
    },

    rename: function(req, res) {
      var params = FILL_ME_IN; //TODO need new name and old name
      wishlistModel.wishlists.renameList(params, function() {
        res.sendStatus(201);
      })
    },

    delete: function(req, res) {
      var params = FILL_ME_IN; //TODO name of wishlist you want to delete
      wishlistModel.wishlists.deleteOne(params, function() {
        res.sendStatus(201);
      })
    }
  },

}
