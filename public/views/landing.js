angular.module('rosterRooster')
.controller('landing', function($scope, rService){

$scope.loginUser = {};



  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }
  // fake modal show/hide

  $scope.called = false;
  
  
  $scope.hide = function(){
    $scope.called = false
  };

  $scope.login = function(){
    
  };
  
  $scope.newAcct = function(){
      $scope.called = true
    console.log($scope.called);
  };

// set username and password





});
