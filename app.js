angular.module('app', [])

// myApp.controller('IdeasController', ['$scope', '$data', function($scope, $data) {
//   console.log($data);
//   console.log('data');
//   $scope.technologies = $data.technologies;
//   $scope.audiences = $data.audiences;

//   $scope.generateIdea = function() {
//     console.log('generate idea called');
//     var tech = $scope.technologies[Math.floor(Math.random()*$scope.technologies.length)];
//     var audiences = $scope.audiences[Math.floor(Math.random()*$scope.audiences.length)];
//     return tech + ', but for ' + audiences;
//   }


// }]);


.controller('IdeasController', function($scope) {

  console.log('app.js was loaded');

  $scope.generateIdea = function() {
    console.log('generate idea called');
    // var tech = $scope.technologies[Math.floor(Math.random()*$scope.technologies.length)];
    // var audiences = $scope.audiences[Math.floor(Math.random()*$scope.audiences.length)];
    // return tech + ', but for ' + audiences;
  }


});