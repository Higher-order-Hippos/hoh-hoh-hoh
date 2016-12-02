angular.module('hoh.services', [])

.factory('Wishlist', function ($http) {
  var getWishlist = function (FILL_ME_IN) {
    return $http({
      method: 'POST',
      url: '/api/wishlist',
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
