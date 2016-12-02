var db = require('../config');

var Wishlist = db.Model.dextend({
  tableName: 'wishlists',
  hasTimestamps: true

})
