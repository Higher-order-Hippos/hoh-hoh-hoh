var itemModel = require('./itemModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      itemModel.items.getAll(function(results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [FILL_ME_IN]; // TODO need variables that grab item name and wishlist ID from req.body
      itemModel.items.addOne(params, function(results) {
        res.sendStatus(201);
      });
    }
  },

}
