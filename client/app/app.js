angular.module('hohhohhoh', [
  'hohhohhoh.wishlist',
  'hohhohhoh.services',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'wishlist/wishlist.html',
      controller: 'FILL_ME_IN',
    });
});
