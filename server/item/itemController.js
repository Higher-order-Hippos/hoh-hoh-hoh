var itemModel = require('./itemModel.js');

module.exports = {

  wishlists: {
    get: function (req, res) {
      itemModel.items.getAll(function(err, results) {
        if (err) {
          console.log('Server-side GET request error : ', err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [FILL_ME_IN]; // TODO whatever wishlist data that are being posted
      itemModel.items.addOne(params, function(err, results) {
        if (err) {
          console.log('Server-side POST request error : ', err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

}
