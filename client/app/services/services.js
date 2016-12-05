angular.module('hoh.services', [])

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
    .then((resp) => {
      return resp.data;
    });

  const renameList = (newName, list) => $http({
    method: 'POST',
    url: '/api/wishlist/rename',
    data: { newName, list }
  })
    .then(function(resp){
      return resp.data
    });

  const deleteList = (name) => $http({
    method: 'DELETE',
    url: '/api/wishlist',
    data: { name },
  })
    .then((resp) => resp.data);

  return { addList, getAllList, renameList, deleteList };
})

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

  return { getAllItems, addItemToList };
});
