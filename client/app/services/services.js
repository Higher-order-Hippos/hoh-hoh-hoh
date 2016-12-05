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
    .then((resp) => resp.data);

  const deleteList = (name) => $http({
    method: 'DELETE',
    url: '/api/wishlist',
    data: { name },
  })
    .then((resp) => resp.data);

  return { addList, getAllList, deleteList };
})

.factory('Item', ($http) => {
  const getAllItems = ({ id }) => {
    return $http({
      method: 'POST',
      url: '/api/item/get',
      data: { id },
    })
    .then((resp) => resp.data);
  }

  return { getAllItems };
});
