angular.module('hoh', [
  'hoh.wishlist',
  'hoh.services',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'wishlist/wishlist.html',
      controller: 'WishlistController',
    });
});
