angular.module('hoh.santa', [])

.controller('SantaController', function($scope, SantaFactory) {
  $scope.data = {};
  $scope.data.roomUsers = ['USER1', 'USER2'];

  $scope.addUserToRoom = function(user) {
    $scope.data.roomUsers.push(user);
  }

})

.factory('SantaFactory', function($http){
//Creates room and save in user's database

//Gets all rooms for the user from database

//Gets all users in the room

//Gets the user's receiver


  //return methods in object
})
