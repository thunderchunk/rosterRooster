angular.module('rosterRooster', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

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
      
      .state('admin', {
        url: '/admin/:id',
        templateUrl: './views/admin.html',
        controller: 'admin'

      })
      
      .state('new', {
        url: '/new',
        templateUrl: './views/new.html',
        controller: 'new'

      })
      
      .state('builder', {
        url: '/builder/:id',
        templateUrl: './views/builder.html',
        controller: 'builder'

      })
      
      

})
