angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist, Item) {
  $scope.data = {};

  $scope.add = function() {
    Wishlist.addList($scope.wishlistName)
      .then(function (lists) {
        $scope.data.lists = lists;
      });
  };

  $scope.show = function (list) {
    Item.getItems($scope.thisList)
      .then(function (lists) {
        $scope.data.list = lists
      })
  };
});
