var itemModel = require('./itemModel.js');

module.exports = {

  items: {
    get: function (req, res) {
      var params = req.body.list;
      itemModel.items.getAll(params, function(results) {
        console.log('database query result: ', results);
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = []; //TODO item name and wishlist name
      itemModel.items.addOne(params, function(err, results) {
        res.sendStatus(201);
      });
    },

    rename: function (req, res) {
      var params = []; //TODO item name and wishlist name
      itemModel.items.renameItem(params, function(err, results) {
        res.sendStatus(201);
      });
    },

    delete: function (req, res) {
      var params = []; //TODO item name and wishlist name
      itemModel.items.deleteItem(params, function(err, results) {
        res.sendStatus(201);
      });
    }
  }

}
