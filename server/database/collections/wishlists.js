var db = require('../config');
var Wishlist = require('../models/wishlist');

var Wishlists = new db.Collection();

Wishlists.model = Wishlist;

module.exports = Wishlists;
