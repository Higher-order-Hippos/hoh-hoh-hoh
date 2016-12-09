angular.module('hoh.santa', [])

.controller('SantaController', function($scope) {
  $scope.data = {};
  $scope.data.roomUsers = ['USER1', 'USER2'];
  $scope.data.rooms = ['ROOM1', 'ROOM2'];

  $scope.addUserToRoom = function(user) {
    $scope.data.roomUsers.push(user);
  }

  $scope.createRoom = function() {
    //INSERT FACTORY FUNCTION HERE
    //Something like SantaFactory.createRoom($scope.data)
    //$scope.data = {} in the .then
  }
  // $scope.getRooms = function() {
  //
  // }

})

// .factory('SantaFactory', function($http){
// //Creates room and save in user's database
//
// //Gets all rooms for the user from database
//
// //Gets all users in the room
//
// //Gets the user's receiver
//
//
//   //return methods in object
// })
