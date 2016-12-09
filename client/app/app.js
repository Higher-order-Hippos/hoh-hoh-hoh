// Our main front-end JS file. //

// Our angualr modules //

angular.module('hoh', [
  'hoh.wishlist',                              // Re: wishlists and items
  'hoh.services',                              // All of our services/factories except AttachTokens
  'hoh.auth',
  'hoh.santa',                                // Re: Authentication
  'ngRoute',
])

.config(($routeProvider, $httpProvider) => {
  $routeProvider
    .when('/', {                                     // Routing requests made to '/' end point
      templateUrl: 'wishlist/wishlist.html',         // Render using wishlist.html
      controller: 'WishlistController',              // Use WishlistController
      authenticate: true,                            // Protected route, requires authentication
    })
    .when('/signup', {                               // Routing requests made to '/signup' end point
      templateUrl: 'login/signup.html',              // Render using singup.html
      controller: 'AuthController',                  // Use AuthController
    })
    .when('/login', {                                // Routing request made to 'login' end point
      templateUrl: 'login/login.html',               // Render using login.html
      controller: 'AuthController',                  // Use AuthController
    })
    .when('/santa', {
      templateUrl: 'santa/santa-main.html',
      controller: 'SantaController'
    })
    .otherwise({ redirectTo: '/' });                 // All other request redirect to '/'

  $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', ($window) => {
  const attach = {
    request(object) {
      const jwt = $window.localStorage.getItem('com.hohlife');
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
