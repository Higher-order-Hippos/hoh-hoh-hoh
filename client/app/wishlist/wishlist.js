angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist) {
  $scope.data = {};
  $scope.data.items = {};

  $scope.add = function () {
    Wishlist.addList($scope.wishlistName)
      .then(function () {
        $scope.getAll();
      });
  };

  $scope.show = function (list, index) {
    Wishlist.getItemsfromWishList(list, list.id)
      .then(function (items) {
        // TODO: USE AN UNIQUE KEY (WISHLIST ID FROM DATABASE) TO STORE.
        $scope.data.items = items;
      });
  };

  $scope.getAll = function () {
    Wishlist.getAllList()
      .then(function (wishlists) {
        console.log('receiving wishlist to FE: ', wishlists);
        $scope.data.wishlists = wishlists;
      });
  };

  $scope.getAll();
});
