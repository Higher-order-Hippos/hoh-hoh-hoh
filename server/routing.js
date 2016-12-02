var bodyParser = require('body-parser');
var path = require('path');
var wishlistController = require('./wishlist/wishlistController');

// TODO: Require wishlistController here.

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../client')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));

  app.get('/api/wishlist', wishlistController.getAll);
};
