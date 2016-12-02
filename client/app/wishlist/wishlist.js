angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist) {
  $scope.data = {};

  $scope.add = function () {
    Wishlist.addList($scope.wishlistName)
      .then(function () {
        $scope.getAll();
      });
  };

  $scope.show = function (list) {
    Wishlist.getItemsfromWishList($scope.thisList)
      .then(function (lists) {
        $scope.data.list = lists;
      });
  };

  $scope.getAll = function () {
    Wishlist.addList($scope.wishlistName)
      .then(function (wishlists) {
        $scope.data.wishlists = wishlists;
      });
  };

  $scope.getAll();
});
