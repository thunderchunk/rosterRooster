angular.module('rosterRooster').controller('landing', function($scope,rService){

  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }
  // fake modal show/hide

  $scope.called = false;
  $scope.caller = function(){
     return $scope.called = true;
    };

// set username and password


//Store Username / password to local storage



});
