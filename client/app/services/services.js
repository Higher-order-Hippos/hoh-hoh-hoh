angular.module('hoh.services', [])

.factory('Wishlist', function ($http) {

  var addList = function (name) {
    return $http({
      method: 'POST',
      url: '/api/wishlist',
      data: {
        name: name,
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var getItemsfromWishList = function (list) {
    return $http({
      method: 'GET',
      url: '/api/items',
      data: {
        list: list
      }
    });
  };

  return {
    addList: addList,
    getItemsfromWishList: getItemsfromWishList
  };
});
