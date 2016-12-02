var db = require('../config');
var Wishlist = require('./Wishlist.js');

var Item = db.Model.extend({
  tableName: 'items',
  hasTimestamps: true,
  wishlist: function() {
    return this.belongsTo(Wishlist, 'wishlistId')
  };

});

module.exports = Item;
