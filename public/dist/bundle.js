angular.module('rosterRooster', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/landing.html',
        controller: 'landing'

      })
      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'account'

      })
      .state('employee', {
        url: '/employee',
        templateUrl: './views/employee.html',
        controller: 'employee'

      })
      .state('setSchedule', {
        url: '/setSchedule',
        templateUrl: './views/adminSchedule.html',
        controller: 'adminSchedule'

      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'schedule'

      })

}])

angular.module('rosterRooster').controller('rController', ["$scope", "rService", function($scope, rService){





}]);

angular.module('rosterRooster').service('rService', function(){




})

angular.module('rosterRooster', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/landing.html',
        controller: 'landing'

      })
      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'account'

      })
      .state('employee', {
        url: '/employee',
        templateUrl: './views/employee.html',
        controller: 'employee'

      })
      .state('setSchedule', {
        url: '/setSchedule',
        templateUrl: './views/adminSchedule.html',
        controller: 'adminSchedule'

      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'schedule'

      })

}])

angular.module('rosterRooster').controller('rController', ["$scope", "rService", function($scope, rService){





}]);

angular.module('rosterRooster').service('rService', function(){




})

angular.module('rosterRooster').controller('account', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('adminSchedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('employee', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('landing', ["$scope", "rService", function($scope,rService){

  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }

}]);

angular.module('rosterRooster')
.directive('rrNav', function(){
return{
  restrict: 'E',
  templateUrl: './views/nav.html',
  link: function( scope, element, attributes ) {

    

    // $('.navBtn').hover(function(){
    //   $(this).css({'color':'#9e0c0c'})
    // })
    // $('.navBtn').mouseout(function(){
    //   $(this).css({'color':'black'})
    // })
    //
    // $('.homeBtn').mousedown(function(){
    //   $('.homeBtn').animate({
    //     left: "+=5px"
    //   })
    //
    // })
    // $('.homeBtn').mouseup(function(){
    //   $('.homeBtn').animate({
    //     left: "-=5px"
    //   })
    // })


  }
}



});

angular.module('rosterRooster').controller('schedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('account', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('adminSchedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('employee', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('landing', ["$scope", "rService", function($scope,rService){

  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }

}]);

angular.module('rosterRooster')
.directive('rrNav', function(){
return{
  restrict: 'E',
  templateUrl: './views/nav.html',
  link: function( scope, element, attributes ) {

    

    // $('.navBtn').hover(function(){
    //   $(this).css({'color':'#9e0c0c'})
    // })
    // $('.navBtn').mouseout(function(){
    //   $(this).css({'color':'black'})
    // })
    //
    // $('.homeBtn').mousedown(function(){
    //   $('.homeBtn').animate({
    //     left: "+=5px"
    //   })
    //
    // })
    // $('.homeBtn').mouseup(function(){
    //   $('.homeBtn').animate({
    //     left: "-=5px"
    //   })
    // })


  }
}



});

angular.module('rosterRooster').controller('schedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('account', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('adminSchedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('employee', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster').controller('landing', ["$scope", "rService", function($scope,rService){

  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }

}]);

angular.module('rosterRooster')
.directive('rrNav', function(){
return{
  restrict: 'E',
  templateUrl: './views/nav.html',
  link: function( scope, element, attributes ) {

    

    // $('.navBtn').hover(function(){
    //   $(this).css({'color':'#9e0c0c'})
    // })
    // $('.navBtn').mouseout(function(){
    //   $(this).css({'color':'black'})
    // })
    //
    // $('.homeBtn').mousedown(function(){
    //   $('.homeBtn').animate({
    //     left: "+=5px"
    //   })
    //
    // })
    // $('.homeBtn').mouseup(function(){
    //   $('.homeBtn').animate({
    //     left: "-=5px"
    //   })
    // })


  }
}



});

angular.module('rosterRooster').controller('schedule', ["$scope", "rService", function($scope,rService){

}]);

angular.module('rosterRooster', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/landing.html',
        controller: 'landing'

      })
      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'account'

      })
      .state('employee', {
        url: '/employee',
        templateUrl: './views/employee.html',
        controller: 'employee'

      })
      .state('setSchedule', {
        url: '/setSchedule',
        templateUrl: './views/adminSchedule.html',
        controller: 'adminSchedule'

      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'schedule'

      })

}])

angular.module('rosterRooster').controller('rController', ["$scope", "rService", function($scope, rService){





}]);

angular.module('rosterRooster').service('rService', function(){




})
