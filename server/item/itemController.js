var itemModel = require('./itemModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      itemModel.items.getAll(function(results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [FILL_ME_IN]; //TODO item name and wishlist name
      itemModel.items.addOne(params, function(results) {
        res.sendStatus(201);
      });
    }
  },

}
