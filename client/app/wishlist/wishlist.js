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
        const id = list.id;
        $scope.data.items[id] = items;
      });
  };

  $scope.getAll = () => {
    Wishlist.getAllList()
      .then((wishlists) => {
        $scope.data.wishlists = wishlists;
      });
  };

  $scope.editListName = (newName, wishlist) => {
    Wishlist.renameList(newName, wishlist.id)
      .then(() => $scope.getAll());
  };

  $scope.addItem = (name, wishlist) => {
    Item.addItemToList(name, wishlist.id)
      .then(() => $scope.show(wishlist));
  };

  $scope.getAll();
});
