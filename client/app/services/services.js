angular.module('hoh.services', [])

.factory('Wishlist', function ($http) {

  var getAllList = function () {
    return $http({
      method: 'GET',
      url: '/api/wishlist',
    })
    .then(function(resp) {
      return resp.data;
    });
  };

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
    console.log('passing listname to baackend: ', list.name);
    return $http({
      method: 'POST',
      url: '/api/item/get',
      data: {
        list: list.name
      }
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data;
    });
  };

  return {
    addList: addList,
    getItemsfromWishList: getItemsfromWishList,
    getAllList: getAllList
  };
});
