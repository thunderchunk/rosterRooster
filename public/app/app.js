angular.module('rosterRooster', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/landing.html',
        controller: 'landing',
        resolve: {
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          users: function (rService) {
            return rService.masterUsers().then(function(response) {
              console.log(response.data);
              return response.data;
            });
          }
        }

      })
      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'account',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }
          
      })
      .state('employee', {
        url: '/employee',
        templateUrl: './views/employee.html',
        controller: 'employee',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          users: function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }
        
      })
      .state('setSchedule', {
        url: '/setSchedule',
        templateUrl: './views/adminSchedule.html',
        controller: 'adminSchedule',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          assigned: function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          status: function (rService) {
            return rService.scheduleStatus().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }

      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'schedule',
        resolve: {
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          },
          assigned: function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          }
        }

      })
      
      .state('admin', {
        url: '/admin/:id',
        templateUrl: './views/admin.html',
        controller: 'admin',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          users: function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }

      })
      
      .state('new', {
        url: '/new',
        templateUrl: './views/new.html',
        controller: 'new',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          users: function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }

      })
      
      .state('builder', {
        url: '/builder/:id',
        templateUrl: './views/builder.html',
        controller: 'builder',
        resolve: {
          availability: function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employers: function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          employees: function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          users: function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          assigned: function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response);
              return response.data;
            });
          },
          status: function (rService) {
            return rService.scheduleStatus().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }
        }

      })
      
      

})
