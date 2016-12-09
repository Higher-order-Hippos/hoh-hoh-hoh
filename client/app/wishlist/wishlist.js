// Wishlist module

angular.module('hoh.wishlist', [])

/* Wishlist Controller
 * Pass in scope from wishlist.html Wishlist and Item factories from services.js
 */

.controller('WishlistController', function ($scope, Wishlist, Item) {
  $scope.data = {};                                // Main data object to store wishlists and items
  $scope.data.items = {};                          // Items from wishlist are stored here.
  $scope.data.searchResults = [
    { "name": "Apple iPod touch 32GB, Assorted Colors",
      "msrp": "299.99",
      "thumbnailImage": "https://i5.walmartimages.com/asr/b073892b-49dc-4d26-80f1-56ea95f1349e_1.c840aba8a20953cd66a4317670b2bb45.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "customerRating": "4.441",
    },
    { "name": "Apple iPod touch 64GB, Assorted Colors",
      "msrp": "499.99",
      "thumbnailImage": "https://i5.walmartimages.com/asr/b073892b-49dc-4d26-80f1-56ea95f1349e_1.c840aba8a20953cd66a4317670b2bb45.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "customerRating": "4.441",
    },
    { "name": "Apple iPod touch 128GB, Assorted Colors",
      "msrp": "599.99",
      "thumbnailImage": "https://i5.walmartimages.com/asr/b073892b-49dc-4d26-80f1-56ea95f1349e_1.c840aba8a20953cd66a4317670b2bb45.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      "customerRating": "4.441",
    }
  ]

  /*
   • Function: addList()
   • Parameter: NONE
   • It calls addList function in the Wishlist factory and
   --- pass in the name of wishlist you want to create.
   • It clears the input field and it calls getAllList function to re-render the page.
   */

  $scope.addList = () => {
    Wishlist.addList($scope.data.newWishlistName)
      .then(() => {
        $scope.data.newWishlistName = '';
        $scope.getAllList();
      });
  };

  /*
   • Function: getAllItems(wishlist)
   • Parameters:
   --1) wishlist: OBJECT. It contains wishlist data
   • It calls getAllItems function in the Item factory.
   • Once it receives items from the factory in a form of array,
   --- store it in data.items object using id of wishlist as a key.
   */

  $scope.getAllItems = (wishlist) => {
    Item.getAllItems(wishlist)
      .then((items) => {
        const id = wishlist.id;
        $scope.data.items[id] = items;
      });
  };

  /*
   • Function: deleteList({id})
   • Parameters:
   --1) { id }: destrctured OBJECT, it must contain 'id' key of a wishlist.
   • It calls deleteList function in the Wishlist factory.
   • Once deleteList is resolved, it calls getAllList function to re-render the page.
   */

  $scope.deleteList = ({ id }) => {
    Wishlist.deleteList(id)
      .then(() => {
        $scope.getAllList();
      });
  };

  /*
   • Function: getAllList()
   • Parameters: None
   • It calls getAllList function in the Wishlist factory.
   • Once it receives wishlists from the factory in a form of array stores it in data object.
   */

  $scope.getAllList = () => {
    Wishlist.getAllList()
      .then((wishlists) => {
        $scope.data.wishlists = wishlists;
      });
  };

  /*
   • Function: editListName(newName, wishlist)
   • Parameters:
   --1) newName: STRING, a name you want to use to update the name of wishlist.
   --2) { id }: destrctured OBJECT, it must contain 'id' key of a wishlist.
   • It calls renameList function in the Wishlist factory.
   • Once renameList is resolved, it calls getAllList function to re-render the page, and
   --- it clears the input field.
   */

  $scope.editListName = (newName, { id }) => {
    Wishlist.renameList(newName, id)
      .then(() => {
        $scope.getAllList();
        $scope.data.renameList = '';
      });
  };

  /*
   • Function: addItem(name, wishlist)
   • Parameters:
   --1) name: STRING, a name of item to be added to the wishlist
   --2) wishlist: Object, it contains wishlist data. Item will be added to this wishlist.
   • It calls renameList function in the Item factory.
   • Once renameList is resolved, it calls getAllList function to re-render the page, and
   --- it clears the input field.
   */

  $scope.addItem = (name, wishlist) => {
    Item.addItemToList(name, wishlist.id)
      .then(() => {
        $scope.getAllItems(wishlist);
        $scope.data.itemName = '';
      });
  };

  $scope.callApi = (query, wishlist) => {
    console.log("From within client/app/wishlist/wishlist.js: name, wishlist", query, wishlist)
    Item.callApiForItem(query, wishlist.id)
      .then((searchResults) => {
        // $scope.data.searchResults = searchResults;
        $scope.getAllItems(wishlist);
      })
  }

  /*
   • Function: editItem(name, item, wishlist)
   • Parameters:
   --1) name: STRING, a name to be use to update the name of the item.
   --2) itemId: INTEGER, id of item to be updated.
   --3) wishlist: Object, containing wishlist data.
   • It calls addItemToList function in the Item factory.
   • Once editItem is resolved, it calls getAllItems passing wishlist to re-render the wishlist, and
   --- clears the input field.
   */

  $scope.editItem = (name, itemId, wishlist) => {
    Item.editItem(name, itemId)
      .then(() => {
        $scope.getAllItems(wishlist);
        $scope.data.newItemName = '';
      });
  };

  /*
   • Function: deleteItem(wishlist, itemId)
   • Parameters:
   --1) wishlist: Object, containing wishlist data.
   --2) itemId: INTEGER, id of item to be updated.
   • It calls deleteItem function in the Item factory.
   • Once editItem is resolved, it calls getAllItems passing wishlist to re-render the wishlist, and
   --- clears the input field.
   */

  $scope.deleteItem = (wishlist, itemId) => {
    Item.deleteItemFromList(itemId)
      .then(() => $scope.getAllItems(wishlist));
  };

  // When the Wishlist.hmtl page loads it invokes getAllList to populate the wishlists.
  $scope.getAllList();
});
