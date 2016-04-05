angular.module('app', [])

.controller('IdeasController', function($scope) {

  console.log('app.js was loaded');

  $scope.generateIdea = function() {
    var tech = technologies[Math.floor(Math.random()*technologies.length)];
    var audience = audiences[Math.floor(Math.random()*audiences.length)];
    $scope.nextIdea = tech + ', but for ' + audience;
    console.log($scope.nextIdea);
  }


});