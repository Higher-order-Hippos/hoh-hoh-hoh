var db = require('../config');

var Wishlist = db.Model.dextend({
  tableName: 'wishlistsl',
  hasTimestamps: true

})
