angular.module('hohhohhoh.services', [])

.factory('Wishlist', function ($http) {
  var getWishlist = function (FILL_ME_IN) {
    return $http({
      method: 'POST',
      url: 'FILL_ME_IN',
      data: {
        FILL_ME_IN: 'FILL_ME_IN',
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getWishlist: getWishlist
  };
});
