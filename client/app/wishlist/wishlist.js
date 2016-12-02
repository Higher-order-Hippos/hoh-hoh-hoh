angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist) {
  $scope.data = {};

  $scope.add = function () {
    Wishlist.addList($scope.wishlistName)
      .then(function () {
        $scope.getAll();
      });
  };

  $scope.show = function (list, index) {
    Wishlist.getItemsfromWishList(list, list.$$hashKey)
      .then(function (items) {
        $scope.data.list = items;
      });
  };

  $scope.getAll = function () {
    Wishlist.getAllList()
      .then(function (wishlists) {
        $scope.data.wishlists = wishlists;
      });
  };

  $scope.getAll();
});
