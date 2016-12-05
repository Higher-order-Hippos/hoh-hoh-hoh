angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist, Item) {
  $scope.data = {};
  $scope.data.items = {};

  $scope.add = () => {
    Wishlist.addList($scope.wishlistName)
      .then(() => $scope.getAll());
  };

  $scope.show = (list) => {
    Item.getAllItems(list)
      .then((items) => {
        $scope.data.items = items;
      });
  };

  $scope.getAll = () => {
    Wishlist.getAllList()
      .then((wishlists) => {
        console.log('receiving wishlist to FE: ', wishlists);
        $scope.data.wishlists = wishlists;
      });
  };

  $scope.getAll();
});
