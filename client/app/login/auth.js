angular.module('hoh.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.user.isLoggedIn = false;

  $scope.signin = () => {
    Auth.signin($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.hohlife', token);
        $location.path('/');
        $scope.user.isLoggedIn = true;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signup = () => {
    Auth.signup($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.hohlife', token);
        $location.path('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signout = () => {
    Auth.signout();
    $scope.user.isLoggedIn = false;
  };

});
