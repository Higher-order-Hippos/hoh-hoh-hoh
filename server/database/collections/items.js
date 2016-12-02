var db = require('../config');
var Item = require('../models/item');

var Items = new db.Collection();

Items.model = Item;

module.exports = Items;
