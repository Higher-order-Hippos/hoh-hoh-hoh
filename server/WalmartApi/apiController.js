
var request = require('request');

var formatUrl = function(query) {
  return 'http://api.walmartlabs.com/v1/search?query=' + query + '&apiKey=yq5uv9adz2wm8yxqttgd9tqp';
}

var search = function(query, callback) {
  request({url: formatUrl(query)}, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      callback(body); //It will not going to work without the callback
    } else {
      callback({
        error: 'ERROR'
      });
    }
  })
}
  //TO-DO
  // body = body.slice(0, 3);
  // return body; //save only the itemId in the database
  // db => column for item spec => store in an object
  // A.S.A.M => just save the itemId and perform another API call
  // return body;
var modifiedResult = function(body) {
  // if(body.hasOwnProperty())
  console.log('typeof body', typeof body);
  return body.items.map(function(product) {
    console.log("PRODUCT", product)
    return {
      name: product.name,
      price: product.salePrice,
      description: product.longDescription,
      brandName: product.brandName,
      thumbnailImage: product.thumbnailImage,
      mediumImage: product.mediumImage,
      largeImage: product.largeImage,
      productUrl: product.productUrl,
      rating: product.customerRating,
      ratingImage: product.customerRatingImage,

    }
  })
}

var setDefaultQuery = function() {

  var defaultResult = {
      name: 'Name',
      price: null,
      description: null,
      brandName: null,
      mediumImage: null,
      largeImage: null,
      productUrl: null,
      rating: 0,
      ratingImage: null
  };
   return defaultResult;
}

module.exports = {
  search: search,
  modifiedResult: modifiedResult, 
}


// {query: "ipod"}

//Response DATA => It can be modified:
// {  
//    "items":[  
//       {  
//          "name":"Straight Talk Apple iPhone 5S 16GB 4G LTE Prepaid Smartphone",
//          "salePrice":149,
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