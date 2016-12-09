angular.module('hoh.santa', [])

.controller('SantaController', function($scope, SantaFactory, Auth) {
  $scope.data = {};
  $scope.data.createRoom = {};
  $scope.data.createRoom.roomUsers = ['USER1', 'USER2'];

  $scope.data.userData = {};
  $scope.data.userData.rooms = ['ROOM1', 'ROOM2'];

  $scope.addUserToRoom = function(user) {
    $scope.data.createRoom.roomUsers.push(user);
  }

  $scope.createRoom = function() {
    //Something like SantaFactory.createRoom($scope.data)
    //Change to get actual user id
    let userID = Auth.user.id;
    console.log('this is AUTH.USER: ', Auth.user)
    SantaFactory.createRoom(userID, $scope.data.createRoom)
    .then(function() {
    //Reset createRoom object
      $scope.data.createRoom = {}
    })
  }
  // $scope.getRooms = function() {
  //
  // }

})

.factory('SantaFactory', function($http){
//Creates room
  var createRoom = function(userID, roomData) {
    console.log('THIS IS userID: ', userID);
    console.log('THIS IS roomData: ', roomData  );
    return $http.post('/api/santa/' + userID, roomData)
//WORK IN PROGRESS
    .then(function(res) {
      return res;
    })
  }

//Save in users in created room user's database

//Gets all rooms for the user from database

//Gets all users in the room

//Gets the user's receiver


  //return methods in object
  return {
    createRoom: createRoom
  }
})
