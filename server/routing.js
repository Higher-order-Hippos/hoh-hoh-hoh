const wishlistController = require('./wishlist/wishlistController');
const itemController = require('./item/itemController');
const userController = require('./user/userController');
const bodyParser = require('body-parser');
const path = require('path');
const walmart = require('./WalmartApi/apiController')
const request = require('request');

console.log("request", request)
module.exports = (app, express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../client')));
  app.use(express.static(path.join(__dirname, '/../client/app')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));

  // requests for home page, with auth check
  app.post('/api/users/signin', userController.users.signin);
  app.post('/api/users/signup', userController.users.signup);

  app.get('/api/wishlist', wishlistController.wishlists.get);
  app.post('/api/wishlist', wishlistController.wishlists.post);
  app.post('/api/wishlist/rename', wishlistController.wishlists.rename);
  app.post('/api/wishlist/delete', wishlistController.wishlists.delete);

  // requests for items
  app.post('/api/item/get', itemController.items.get);
  app.post('/api/item', itemController.items.post);
  app.post('/api/item/rename', itemController.items.rename);
  app.post('/api/item/delete', itemController.items.delete);
  
  //walmart api
  app.get('/api/walmart/', function(req, res){  
    var publicApi = 'http://api.walmartlabs.com/v1/search?query=ipod&apiKey=yq5uv9adz2wm8yxqttgd9tqp';
     request({url: publicApi}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log("Body", body)
      console.log("REQ", body)
      res.json(body);
    } 
  })
   });
}
