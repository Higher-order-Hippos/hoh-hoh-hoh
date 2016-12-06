angular.module('hoh.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = () => {
    Auth.signin($scope.user)
      .then((token) => {
        console.log("We're here!!!! at the signin then");
        $window.localStorage.setItem('com.hohlife', token); //TODO
        $location.path('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signup = () => {
    Auth.signup($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.hohlife', token); //TODO
        $location.path('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
});
