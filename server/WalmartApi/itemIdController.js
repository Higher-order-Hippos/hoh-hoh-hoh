var request = require('request');
var walmartId = process.env.API_KEY;

var searchId = function(itemId) {
  return 'http://api.walmartlabs.com/v1/items?ids=' + itemId + '&apiKey=' + walmartId;
}

var searchItemId = function(itemId, callback) {
  console.log('ITEMID', searchId(itemId));
  request({url: searchId(itemId)}, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      callback(body); 
    } else {
      callback({
        error: 'ERROR'
      });
    }
  }


