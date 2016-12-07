angular.module('hoh.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = () => {
    Auth.signin($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.hohlife', token);
        isLoggedIn();
        console.log("AFTER LOG INN: ", $scope.user.isLoggedIn)

        $location.path('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signup = () => {
    Auth.signup($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.hohlife', token);
        isLoggedIn();
        console.log("AFTER LOG INN: ", $scope.user.isLoggedIn)
        $location.path('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signout = () => {
    Auth.signout();
<<<<<<< HEAD
  };

  $scope.isAuth = () => {
    return !!$window.localStorage.getItem('com.hohlife');
=======
    isLoggedIn();
    console.log("AFTER LOG OUT: ", $scope.user.isLoggedIn)
>>>>>>> temp
  };

});
