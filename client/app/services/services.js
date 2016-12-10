// Wishlist and Item factory

angular.module('hoh.services', [])

/* Wishlist Factory
 * Read, write, update, and delete wishlist
 */

.factory('Wishlist', ($http) => {
  /*
   • Function: getAllList()
   • Invoked by: WishlistController - getAllList, addList, editListName, deleteList
   • Parameters: NONE
   • It calls $http function that makes a GET request to /api/wishlist.
   • $http function resolves into data which gets returned back to the WishlistController
   */

  const getAllList = () => $http({
    method: 'GET',
    url: '/api/wishlist',
  })
    .then(({ data }) => data);

  /*
   • Function: addList(name)
   • Invoked by: WishlistController - addList
   • Parameters
   --1) name: STRING, a name of wishlist to be added.
   • It calls $http function that makes a POST request to /api/wishlist.
   --- It passes name in the request body.
   • $http function resolves into data which gets returned and becomes available to
   --- WishlistController - addList
   */

  const addList = (name) => $http({
    method: 'POST',
    url: '/api/wishlist',
    data: { name },
  })
    .then(({ data }) => data);

  /*
   • Function: renameList(newName, list))
   • Invoked by: WishlistController - editListName
   • Parameters
   --1) newName: STRING, a name to be use to update the name of the wishlist.
   --2) wishlistId: INTEGER, id of the wishlist to be updated
   • It calls $http function that makes a POST request to /api/wishlist/rename
   --- It passes newName, wishlistId in the request body.
   • $http function resolves into data which gets returned and becomes available to
   --- WishlistController - editListName
   */

  const renameList = (newName, wishlistId) => $http({
    method: 'POST',
    url: '/api/wishlist/rename',
    data: { newName, wishlistId },
  })
    .then(({ data }) => data);

  /*
   • Function: deleteList(wishlistId)
   • Invoked by: WishlistController - deleteList
   • Parameters
   --1) wishlistId: INTEGER, id of the wishlist to be deleted
   • It calls $http function that makes a POST request to /api/wishlist/delete
   --- It passes wishlistId in the request body.
   • $http function resolves into data which gets returned and becomes available to
   --- WishlistController - deleteList
   */

  const deleteList = (wishlistId) => $http({
    method: 'POST',
    url: '/api/wishlist/delete',
    data: { wishlistId },
  })
    .then(({ data }) => data);

  return { addList, getAllList, renameList, deleteList };
})

/* Item Factory
 * Read, write, update, and delete item
 */

.factory('Item', ($http) => {
  const getAllItems = ({ id }) => $http({
    method: 'POST',
    url: '/api/item/get',
    data: { id },
  })
    .then(({ data }) => data);

  const addItemToList = (name, id) => $http({
    method: 'POST',
    url: '/api/item',
    data: { name, id },
  })
      .then(({ data }) => data);

  const editItem = (name, item) => $http({
    method: 'POST',
    url: '/api/item/rename',
    data: { name, item },
  })
    .then(({ data }) => data);

  const deleteItemFromList = (itemId) => $http({
    method: 'POST',
    url: '/api/item/delete',
    data: { itemId },
  })
    .then(({ data }) => data);

  const callApiForItem = (query) => {
    console.log("From within client/app/services/services.js: name", query)
    return $http({
    method: 'POST',
    url: '/api/walmart/',
    data: {query}
  })
  .then(({searchResults}) => searchResults);}

  return { getAllItems, addItemToList, editItem, deleteItemFromList, callApiForItem };
})

/* Auth Factory */
.factory('Auth', ($http, $location, $window) => {
  let user = {};

  const getSessionData = () => $http({
    method: 'GET',
    url: '/api/session'
  })
    .then(({ data: userData }) => {
      for (var prop in userData) {
        user[prop] = userData[prop];
      }
    })
    .catch(() => signout());

  const signin = ({ username, password }) => $http({
    method: 'POST',
    url: '/api/users/signin',
    data: { username, password },
  })
    .then(({ data: { token } }) => token);

  const signup = ({ username, password }) => $http({
    method: 'POST',
    url: '/api/users/signup',
    data: { username, password },
  })
    .then(({ data: { token } }) => token);

  const isAuth = () => !!$window.localStorage.getItem('com.hohlife');

  const signout = () => {
    $window.localStorage.removeItem('com.hohlife');
    $location.path('/login');
  };

  return { signin, signup, isAuth, signout, getSessionData, user };
});
