angular.module('hoh.item', [])

.controller('ItemController', function ($scope, Wishlist) {
  $scope.data = {};

  $scope.add = function() {
    Wishlist.addList($scope.wishlistName)
      .then(function (lists) {
        $scope.data.lists = lists;
      });
  };
});
