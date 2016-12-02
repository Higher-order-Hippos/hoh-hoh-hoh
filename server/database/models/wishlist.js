var db = require('../config');
var Item = require('./item.js');

var Wishlist = db.Model.extend({
  tableName: 'wishlists',
  hasTimestamps: true,

  items: function() {
    return this.hasMany(Item);
  };

});

module.exports = Wishlist;
