angular.module('hoh.wishlist', [])

.controller('WishlistController', function ($scope, Wishlist, Item) {
  $scope.data = {};
  $scope.data.items = {};

  $scope.addList = () => {
    Wishlist.addList($scope.wishlistName)
      .then(() => $scope.getAllList());
  };

  $scope.getAllItems = (wishlist) => {
    Item.getAllItems(wishlist)
      .then((items) => {
        const id = wishlist.id;
        $scope.data.items[id] = items;
      });
  };

  $scope.deleteList = ({ id }) => {
    Wishlist.deleteList(id)
      .then(() => {
        $scope.getAllList();
      });
  };

  $scope.getAllList = () => {
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
      .then(() => $scope.getAllItems(wishlist));
  };

  $scope.editItem = (name, item, wishlist) => {
    Item.editItem(name, item)
      .then(() => $scope.getAllItems(wishlist));
  };

  $scope.deleteItem = (wishlist, itemId) => {
    Item.deleteItemFromList(itemId)
      .then(() => $scope.getAllItems(wishlist));
  };

  $scope.getAllList();
});
