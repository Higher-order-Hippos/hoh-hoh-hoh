const wishlistController = require('./wishlist/wishlistController');
const itemController = require('./item/itemController');
const userController = require('./user/userController');
const sessionController = require('./session/sessionController');
const santaController = require('./santa/santaController');
const bodyParser = require('body-parser');
const path = require('path');
const walmart = require('./WalmartApi/apiController')
const request = require('request');

module.exports = (app, express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../client')));
  app.use(express.static(path.join(__dirname, '/../client/app')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));

  app.get('/api/session', sessionController.sessions.getUser);

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


  // requests for secret santa
  app.post('/api/santa/:id', santaController.createRoom);


  //walmart api

app.post('/api/walmart', function(req, res) {
  // console.log("REQ.BODY", req.body)
  walmart.search(req.body.query, function(data) {
    // console.log("DATA", data)
    res.json(walmart.modifiedResult(JSON.parse(data)));
    console.log("DATAAAA", data);
  });
 });

  app.get('/api/walmart/', function(req, res){
    var publicApi = 'http://api.walmartlabs.com/v1/search?query=' + req.body.name + '&apiKey=yq5uv9adz2wm8yxqttgd9tqp';
     request({url: publicApi}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log("Body", body)
      console.log("REQ", body)
      res.json(body);
      }
    })
  });
};
