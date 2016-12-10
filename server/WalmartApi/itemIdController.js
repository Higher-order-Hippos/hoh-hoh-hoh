var request = require('request');
var walmartId = process.env.API_KEY;

var searchId = function(itemId) {
  return 'http://api.walmartlabs.com/v1/items?ids=' + itemId + '&apiKey=' + walmartId;
};

var searchItemId = function(itemId, callback) {
  console.log('ITEMID', searchId(itemId));
  request({url: searchId(itemId)}, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(body); 
    } else {
      callback({
        error: 'ERROR'
      });
    }
  });
};

var itemIdResult = function(body) {
  return body.items.map(function(product) {
    return {
      name: product.name,
      price: product.salePrice,
      itemId: product.itemId,
      description: product.shortDescription,
      thumbnailImage: product.thumbnailImage,
      productUrl: product.productUrl,
      rating: product.customerRating,
      ratingImage: product.customerRatingImage
    };
  });
};

module.exports = {
  searchItemId: searchItemId,
  itemIdResult: itemIdResult, 
};


// {query: "ipod"}

//Response DATA => It can be modified:
// {  
//    "items":[  
//       {  
//          "name":"Straight Talk Apple iPhone 5S 16GB 4G LTE Prepaid Smartphone",
//          "salePrice":149,
//			"itemId":123456,
//          "categoryPath":"Cell Phones/Straight Talk Wireless/Straight Talk Cell Phones",
//          "longDescription":"Straight Talk Apple iPhone 5S 16GB 4G LTE Prepaid Smartphone:4&quot; Retina displayA7 chip with M7 motion coprocessorTouch ID fingerprint sensorNew 8MP iSight camera with True Tone flash1080p HD video recordingFaceTime HD cameraUltrafast 4G LTE wirelessOver 900,000 apps on the App StoreiOS 7 ; the world's most advanced mobile OSiCloud ; your content on all your devicesResolution: 1136 x 640Storage: 16GBBluetooth 4.0 wireless technologyWireless data: 802.11a/b/g/n WiFi (802.11n 2.4GHz and 5GHz)Assisted GPS with GLONASSBuilt-in rechargeable lithium-ion batteryTalk time: Up to 10 hours on 3GStandby time: Up to 250 hoursInternet use: Up to 8 hours on 3G, up to 10 hours on LTE, up to 10 hours on WiFiVideo playback: Up to 10 hoursAudio playback: Up to 40 hoursWeight and dimensions:Height: 4.87&quot;Width: 2.31&quot;Depth: 0.30&quot;Weight: 3.95 ozWhat's in the Box:Apple iPhone 5SApple EarPods with remote and micLightning to USB CableUSB Power AdapterDocumentation",
//          "brandName":"Apple",
//          "thumbnailImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//          "mediumImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//          "largeImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//          "productTrackingUrl":"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip%252FStraight-Talk-Apple-iPhone-5S-16GB-4G-LTE-Prepaid-Smartphone%252F50285046%253Faffp1%253DOsmgDBzME0u1DW9mDF71IG7sllmBeqZpgYsrALOGfjc%2526affilsrc%253Dapi",
//          "color":"Gray",
//          "modelNumber":"iPhone 5S",
//          "productUrl":"http://c.affil.walmart.com/t/api01?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FStraight-Talk-Apple-iPhone-5S-16GB-4G-LTE-Prepaid-Smartphone%2F50285046%3Faffp1%3DOsmgDBzME0u1DW9mDF71IG7sllmBeqZpgYsrALOGfjc%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
//          "customerRating":"4.289",
//          "customerRatingImage":"http://i2.walmartimages.com/i/CustRating/4_3.gif",
//          "stock":"Available",
//          "imageEntities":[  
//             {  
//                "thumbnailImage":"https://i5.walmartimages.com/asr/c7447d99-c90c-4039-b098-7ec0949e85ea_1.d6bf6d15f16849b61e85deeac75035c7.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//                "mediumImage":"https://i5.walmartimages.com/asr/c7447d99-c90c-4039-b098-7ec0949e85ea_1.d6bf6d15f16849b61e85deeac75035c7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//                "largeImage":"https://i5.walmartimages.com/asr/c7447d99-c90c-4039-b098-7ec0949e85ea_1.d6bf6d15f16849b61e85deeac75035c7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//                "entityType":"SECONDARY"
//             },
//             {  
//                "thumbnailImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//                "mediumImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//                "largeImage":"https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.0872b05362d97ff68033417572228b40.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//                "entityType":"PRIMARY"
//             }
//          ],
//       }
//    ]
// }