angular.module('hoh.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        console.log("We're here!!!! at the signin then")
        $window.localStorage.setItem('com.hohlife', token); //TODO
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.hohlife', token); //TODO
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
