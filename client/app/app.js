angular.module('hoh', [
  'hoh.wishlist',
  'hoh.services',
  'hoh.auth',
  'ngRoute',
])

.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'wishlist/wishlist.html',
      controller: 'WishlistController',
      authenticate: true,
    })
    .when('/signup', {
      templateUrl: 'login/signup.html',
      controller: 'AuthController',
    })
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'AuthController',
    })
    .otherwise({ redirectTo: '/' });
})

.factory('AttachTokens', ($window) => {
  const attach = {
    request(object) {
      const jwt = $window.localStorage.getItem('com.hohlife'); //TODO
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }

      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    },
  };
  return attach;
})

.run(($rootScope, $location, Auth) => {
  $rootScope.$on('$routeChangeStart', (evt, next, current) => {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
});
