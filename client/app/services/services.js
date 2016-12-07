angular.module('hoh.services', [])

/* Wishlist Factory */
.factory('Wishlist', ($http) => {
  const getAllList = () => $http({
    method: 'GET',
    url: '/api/wishlist',
  })
    .then((resp) => resp.data);

  const addList = (name) => $http({
    method: 'POST',
    url: '/api/wishlist',
    data: { name },
  })
    .then((resp) => resp.data);

  const renameList = (newName, list) => $http({
    method: 'POST',
    url: '/api/wishlist/rename',
    data: { newName, list },
  })
    .then((resp) => resp.data);

  const deleteList = (wishlistId) => $http({
    method: 'POST',
    url: '/api/wishlist/delete',
    data: { wishlistId },
  })
    .then((resp) => resp.data);

  return { addList, getAllList, renameList, deleteList };
})

/* Item Factory */
.factory('Item', ($http) => {
  const getAllItems = ({ id }) => $http({
    method: 'POST',
    url: '/api/item/get',
    data: { id },
  })
    .then((resp) => resp.data);

  const addItemToList = (name, id) => $http({
      method: 'POST',
      url: '/api/item',
      data: { name, id },
    })
      .then((resp) => resp.data);

  const editItem = (name, item) => $http({
    method: 'POST',
    url: '/api/item/rename',
    data: { name, item },
  })
    .then((resp) => resp.data);

  const deleteItemFromList = (itemId) => $http({
    method: 'POST',
    url: '/api/item/delete',
    data: { itemId },
  })
    .then((resp) => resp.data);

  return { getAllItems, addItemToList, editItem, deleteItemFromList };
})

/* Auth Factory */
.factory('Auth', ($http, $location, $window) => {
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
    .then((resp) => resp.data.token);

  const isAuth = () => !!$window.localStorage.getItem('com.hohlife'); //TODO

  const signout = () => {
    $window.localStorage.removeItem('com.hohlife'); //TODO
    $location.path('/login');
  };

  return { signin, signup, isAuth, signout };
});
