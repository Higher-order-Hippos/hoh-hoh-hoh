const path = require('path');
const wishlistController = require('./wishlist/wishlistController');
const itemController = require('./item/itemController');
const userController = require('./user/userController')
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


module.exports = (app, express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../client')));
  app.use(express.static(path.join(__dirname, '/../client/app')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));
  app.use(cookieParser('shhhh, very secret'));


  // required for passport
  app.use(session({
    secret: 'hohlife',
    resave: false,
    saveUninitialized: false
   }));

  // requests for home page, with auth check
  app.get('/');

  app.get('/api/login');
  app.post('/api/login');
  app.get('/api/logout');

  app.get('/api/signup');
  app.post('/api/signup');


  app.get('/api/wishlist', wishlistController.wishlists.get);
  app.post('/api/wishlist', wishlistController.wishlists.post);
  app.post('/api/wishlist/rename', wishlistController.wishlists.rename);
  app.post('/api/wishlist/delete', wishlistController.wishlists.delete);

  // requests for items
  app.post('/api/item/get', itemController.items.get);
  app.post('/api/item', itemController.items.post);
  app.post('/api/item/rename', itemController.items.rename);
  app.post('/api/item/delete', itemController.items.delete);
};
