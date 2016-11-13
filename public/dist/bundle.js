angular.module('rosterRooster', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/landing.html',
        controller: 'landing',
        resolve: {
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          users: ["rService", function (rService) {
            return rService.masterUsers().then(function(response) {
              console.log(response.data);
              return response.data;
            });
          }]
        }

      })
      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'account',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }
          
      })
      .state('employee', {
        url: '/employee',
        templateUrl: './views/employee.html',
        controller: 'employee',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          users: ["rService", function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }
        
      })
      .state('setSchedule', {
        url: '/setSchedule',
        templateUrl: './views/adminSchedule.html',
        controller: 'adminSchedule',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          assigned: ["rService", function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          status: ["rService", function (rService) {
            return rService.scheduleStatus().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }

      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'schedule',
        resolve: {
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          }],
          assigned: ["rService", function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response.data);
              return response.data;
            });
          }]
        }

      })
      
      .state('admin', {
        url: '/admin/:id',
        templateUrl: './views/admin.html',
        controller: 'admin',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          users: ["rService", function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }

      })
      
      .state('new', {
        url: '/new',
        templateUrl: './views/new.html',
        controller: 'new',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          users: ["rService", function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }

      })
      
      .state('builder', {
        url: '/builder/:id',
        templateUrl: './views/builder.html',
        controller: 'builder',
        resolve: {
          availability: ["rService", function (rService) {
            return rService.employeeAvailable().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employers: ["rService", function (rService) {
            return rService.employers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          employees: ["rService", function (rService) {
            return rService.employeeData().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          users: ["rService", function (rService) {
            return rService.masterUsers().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          assigned: ["rService", function (rService) {
            return rService.assignedHours().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }],
          status: ["rService", function (rService) {
            return rService.scheduleStatus().then(function(response) {
              // console.log(response);
              return response.data;
            });
          }]
        }

      })
      
      

}])

angular.module('rosterRooster').controller('rController', ["$scope", "rService", function($scope, rService){





}]);

angular.module('rosterRooster').service('rService', ["$http", function($http){

this.yearHolder;
this.monthHolder;

// ========================   USERS   ============================

this.masterUsers = function(){
  return $http({
  method: 'GET',
  url: '/user'
}).then(function(response){
  return response;
})
};

this.masterUsersPost = function(user){
  return $http({
  method: 'POST',
  url: '/user',
  data: user
}).then(function(response){
  return response;
})
};

this.masterUsersPut = function(user){
  return $http({
  method: 'PUT',
  url: '/user',
  data: user
}).then(function(response){
  return response;
})
};

this.masterUsersDelete = function(user){
  return $http({
  method: 'DELETE',
  url: '/user',
  data: user
}).then(function(response){
  return response;
})
};

// ========================   STATUS   ============================

this.scheduleStatus = function(){
  return $http({
  method: 'GET',
  url: '/status'
}).then(function(response){
  return response;
})
};

this.scheduleStatusPost = function(status){
  return $http({
  method: 'POST',
  url: '/status',
  data: status
}).then(function(response){
  return response;
})
};

this.scheduleStatusPut = function(status){
  return $http({
  method: 'PUT',
  url: '/status',
  data: status
}).then(function(response){
  return response;
})
};

this.scheduleStatusDelete = function(status){
  return $http({
  method: 'DELETE',
  url: '/status',
  data: status
}).then(function(response){
  return response;
})
};
// ========================   EMPLOYEES   ============================

this.employeeData = function(){
  return $http({
  method: 'GET',
  url: '/employees'
}).then(function(response){
  return response;
})
};

this.employeeDataPost = function(employee){
  return $http({
  method: 'POST',
  url: '/employees',
  data: employee
}).then(function(response){
  return response;
})
};

this.employeeDataPut = function(employee){
  return $http({
  method: 'PUT',
  url: '/employees',
  data: employee
}).then(function(response){
  return response;
})
};

this.employeeDataDelete = function(employee){
  return $http({
  method: 'DELETE',
  url: '/employees',
  data: employee
}).then(function(response){
  return response;
})
};
// ========================   EMPLOYERS   ============================

this.employers = function(){
  return $http({
  method: 'GET',
  url: '/employers'
}).then(function(response){
  return response;
})
};

this.employersPost = function(employer){
  return $http({
  method: 'POST',
  url: '/employers',
  data: employer
}).then(function(response){
  return response;
})
};

this.employersPut = function(employer){
  return $http({
  method: 'PUT',
  url: '/employers',
  data: employer
}).then(function(response){
  return response;
})
};

this.employersDelete = function(employer){
  return $http({
  method: 'DELETE',
  url: '/employers',
  data: employer
}).then(function(response){
  return response;
})
};
// ========================   AVAILABILITY   ============================

this.employeeAvailable = function(){
  return $http({
  method: 'GET',
  url: '/availability'
})
};
// console.log(this.employeeAvailable);

this.employeeAvailablePost = function(data){
  return $http({
  method: 'POST',
  url: '/availability',
  data: data
}).then(function(response){
  return response;
})
};

this.employeeAvailablePut = function(data){
  return $http({
  method: 'PUT',
  url: '/availability',
  data: data
}).then(function(response){
  return response;
})
};

this.employeeAvailableDelete = function(data){
  return $http({
  method: 'DELETE',
  url: '/availability',
  data: data
}).then(function(response){
  return response;
})
};
// ========================   ASSIGNED   ============================

this.assignedHours = function(){
  return $http({
  method: 'GET',
  url: '/assigned'
}).then(function(response){
  return response;
})
};

this.assignedHoursPost = function(data){
  return $http({
  method: 'POST',
  url: '/assigned',
  data: data
}).then(function(response){
  return response;
})
};

this.assignedHoursPut = function(data){
  return $http({
  method: 'PUT',
  url: '/assigned',
  data: data
}).then(function(response){
  return response;
})
};

this.assignedHoursDelete = function(data){
  return $http({
  method: 'DELETE',
  url: '/assigned',
  data: data
}).then(function(response){
  return response;
})
};
// 
// this.masterUsers = [
//   {
//     "id": 1,
//     "username": "BigMclargehuge",
//     "password": "kittys1",
//     "employerid": 1,
//     "employeeid": 1,
//     "admin": true,
//     "email": "jediSexCobra69@angelfire.org"
//   },
//   {
//     "id": 2,
//     "username": "Flooger",
//     "password": 123,
//     "employerid": 1,
//     "employeeid": 2,
//     "admin": false,
//     "email": "ninjaShark45@yup.com"
//   },
//   {
//     "id": 3,
//     "username": "Peck",
//     "password": 123,
//     "employerid": 1,
//     "employeeid": 3,
//     "admin": false,
//     "email": "wampaFIGHT@lycos.com"
//   },
//   {
//     "id": 4,
//     "username": "Slab",
//     "password": 123,
//     "employerid": 1,
//     "employeeid": 4,
//     "admin": false,
//     "email": "larpFan12@delaware.gov"
//   },
// 
// ]
// 
// this.employers=
// [
//   {
//     "id": 1,
//     "employername": "Good Clips"
//   },
//   {
//     "id": 2,
//     "employername": "Order Hound LLC"
//   },
//   {
//     "id": 3,
//     "employername": "PAM Industries"
//   }
// ];
// 
// this.employeeAvailable = [
//   {
//     "id": 1,
//     "employeeid": 1,
//     "overtime": true,
//     "mstart": "7:00",
//     "mstop": "17:00",
//     "tustart": "7:00",
//     "tustop": "17:00",
//     "wstart": "7:00",
//     "wstop": "17:00",
//     "thstart":"7:00",
//     "thstop": "17:00",
//     "fstart": "7:00",
//     "fstop": "17:00",
//     "ststart": "",
//     "ststop": "",
//     "sdstart": "",
//     "sdstop": ""
//   },
//   {
//     "id": 2,
//     "employeeid": 2,
//     "overtime": false,
//     "mstart": "7:00",
//     "mstop": "17:00",
//     "tustart": "7:00",
//     "tustop": "17:00",
//     "wstart": "7:00",
//     "wstop": "17:00",
//     "thstart":"7:00",
//     "thstop": "17:00",
//     "fstart": "7:00",
//     "fstop": "17:00",
//     "ststart": "",
//     "ststop": "",
//     "sdstart": "",
//     "sdstop": ""
//   },
//   {
//     "id": 3,
//     "employeeid": 3,
//     "overtime": false,
//     "mstart": "7:00",
//     "mstop": "17:00",
//     "tustart": "7:00",
//     "tustop": "17:00",
//     "wstart": "7:00",
//     "wstop": "17:00",
//     "thstart":"7:00",
//     "thstop": "17:00",
//     "fstart": "7:00",
//     "fstop": "17:00",
//     "ststart": "",
//     "ststop": "",
//     "sdstart": "",
//     "sdstop": ""
//   },
//   {
//     "id": 4,
//     "employeeid": 4,
//     "overtime": false,
//     "mstart": "7:00",
//     "mstop": "17:00",
//     "tustart": "7:00",
//     "tustop": "17:00",
//     "wstart": "7:00",
//     "wstop": "17:00",
//     "thstart":"7:00",
//     "thstop": "17:00",
//     "fstart": "7:00",
//     "fstop": "17:00",
//     "ststart": "",
//     "ststop": "",
//     "sdstart": "",
//     "sdstop": ""
//   },
// 
// ];
// 
// this.assignedHours = [
//   {
//     "id": 1,
//     "employerid": 1,
//     "employeeid": 1,
//     "date": "12-2-16",
//     "start": "3:30",
//     "stop": "4:30"
//   }
// ];
// 
// this.scheduleStatus = [
//   {
//     "id": 1,
//     "employerid": 1,
//     "date": "11-16-16",
//     "published": true,
//     "edited": true
//   },
//   {
//     "id": 2,
//     "employerid": 1,
//     "date": "11-17-16",
//     "published": true,
//     "edited": true
//   },
//   {
//     "id": 3,
//     "employerid": 1,
//     "date": "11-18-16",
//     "published": true,
//     "edited": true
//   },
//   {
//     "id": 4,
//     "employerid": 1,
//     "date": "11-19-16",
//     "published": true,
//     "edited": true
//   },
//   {
//     "id": 5,
//     "employerid": 1,
//     "date": "11-20-16",
//     "published": false,
//     "edited": true
//   },
//   {
//     "id": 6,
//     "employerid": 1,
//     "date": "11-21-16",
//     "published": false,
//     "edited": true
//   }
// 
// ];
// 
// 
// this.employeeData = [
//   {
//     "id": 1,
//     "employerid": 1,
//     "firstname": "Big",
//     "lastname": "McLargehuge",
//     "minitial": "D",
//     "weeklymax": 40,
//     "weeklymin": 35
//   },
//   {
//     "id": 2,
//     "employerid": 1,
//     "firstname": "Flooger",
//     "lastname": "Boogerson",
//     "minitial": "F",
//     "weeklymax": 40,
//     "weeklymin": 30
//   },
//   {
//     "id": 3,
//     "employerid": 1,
//     "firstname": "Peck",
//     "lastname": "Squatthrust",
//     "minitial": "G",
//     "weeklymax": 30,
//     "weeklymin": 20
//   },
//   {
//     "id": 4,
//     "employerid": 1,
//     "firstname": "Slab",
//     "lastname": "Mandible",
//     "minitial": "G",
//     "weeklymax": 20,
//     "weeklymin": 10
//   }
// ];


}]);




angular.module('rosterRooster')
.controller('account', ["$scope", "rService", "availability", "employers", function($scope, rService, availability, employers){
  
  $scope.availability = availability;
  console.log('availability =', $scope.availability);
  $scope.employers = employers;
  console.log('employers =', $scope.employers);

    // ========== sets employee id number ==========

    $scope.employeeidNumber = 1;
    $scope.employeridNumber = 1;

    // ========== sets initial date / creates variable to adjust display ==========

    $scope.currentDate = new Date();

    // ========== KEYSTONE VARIABLES, FROM WHICH ALL IS BUILT ==========


    $scope.displayMonth = $scope.currentDate.getMonth(); //10
    $scope.displayDate = $scope.currentDate.getDate(); //4
    $scope.displayYear = $scope.currentDate.getFullYear(); //2016

    // ========== builds parallel arrays for input into object builder ==========

  $scope.calendarBuilder = function(month, day, year, empId){

    var dayBuilder = [];
    var monthBuilder = [];
    var yearBuilder = [];
    var textToggler = [];
    // get first and last days in the display month
    var firstDay = new Date(year, month, 1);
    var firstDayInt = firstDay.getDate();
    var lastDay = new Date(year, month + 1, 0);
    var lastDayInt = lastDay.getDate();
    // build an array with the days of the month
    for (var i = 1; i <= lastDayInt; i++) {
        dayBuilder.push(i);
        monthBuilder.push(month);
        yearBuilder.push(year);
        textToggler.push(false);
    }

    //Get previous month
    var pMonth;
    var pYear;
    if (month === 0) {
      pMonth = 11;
      pYear = (year - 1);
    }else{
      pMonth = (month - 1)
      pYear = year;
    };

    //get next month

    var nMonth;
    var nYear;
    if(month === 11){
      nMonth = 0
      nYear = (year + 1)
    }else{
      nMonth = (month + 1);
      nYear = year;
    };

    //get last day of previous month

    var pLastDay = new Date(pYear, nMonth + 1, 0);
    var pLastDayInit = pLastDay.getDate();

    // add to front of array with days from last month

    var firstDayOfWeek = firstDay.getDay();
    if (firstDayOfWeek !== 0) {
        for (var j = pLastDayInit; j > (pLastDayInit - firstDayOfWeek); j--) {
            dayBuilder.unshift(j);
            monthBuilder.unshift(pMonth);
            yearBuilder.unshift(pYear);
            textToggler.unshift(true);
        }
    };

    // fill out rest of array with days from next month
    for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
        dayBuilder.push(k);
        monthBuilder.push(nMonth);
        yearBuilder.push(nYear);
        textToggler.push(true)
    };

      // ========== makes the calendar object ==========
      var finalArray = [];

      for (var l = 0; l < dayBuilder.length; l++) {
          var x = new Object();
          x.day = dayBuilder[l];
          x.month = monthBuilder[l];
          x.year = yearBuilder[l];
          x.notCurrentMonth = textToggler[l];
          finalArray.push(x);
        
      };

      // ========== compares calendar object wi availability ==========
      
  
      var employeeFinder = function(){
        for (var m = 0; m < $scope.availability.length; m++) {
          if($scope.availability[m].employeeid === $scope.employeeidNumber){
            return $scope.availability[m];
          }
        }
      }
      var userAvailableHours = employeeFinder();
      console.log("userAvailableHours = ", userAvailableHours);
      
      var sd = [0, 7, 14, 21, 28, 35];
      var md = [1, 8, 15, 22, 29, 36];
      var tu = [2, 9, 16, 23, 30, 37];
      var wd = [3, 10, 17, 24, 31, 38];
      var th = [4, 11, 18, 25, 32, 39];
      var fr = [5, 12, 19, 26, 33, 40];
      var st = [6, 13, 20, 27, 34, 41];
      
      for (var n = 0; n < sd.length; n++) {
        var dayParser = sd[n];
        if(userAvailableHours.sdstart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var o = 0; o < md.length; o++) {
        var dayParser = md[o];
        if(userAvailableHours.mstart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var p = 0; p < tu.length; p++) {
        var dayParser = tu[p];
        if(userAvailableHours.tustart  && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var q = 0; q < wd.length; q++) {
        var dayParser = wd[q];
        if(userAvailableHours.wstart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var r = 0; r < th.length; r++) {
        var dayParser = th[r];
        if(userAvailableHours.thstart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var s = 0; s < fr.length; s++) {
        var dayParser = fr[s];
        if(userAvailableHours.fstart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var t = 0; t < st.length; t++) {
        var dayParser = st[t];
        if(userAvailableHours.ststart && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      console.log("finalArray =", finalArray);
      return finalArray;

  };

  // ========== invoke the function, assigns object to variable ==========

  $scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);


  // ========== changes the currentDate variable to navigate months ==========

  $scope.adjustMonth = function(x) {
      if ($scope.displayDate > 28)
          $scope.currentDate.setDay(27);
      if (($scope.displayMonth  === 0) && x === (-1)) {
          $scope.currentDate.setMonth(11);
          $scope.currentDate.setFullYear($scope.displayYear - 1);
      } else if (($scope.displayMonth === 11) && x === 1) {
          $scope.currentDate.setMonth(0);
          $scope.currentDate.setFullYear($scope.displayYear + 1);
      } else {
          $scope.currentDate.setMonth($scope.displayMonth + x);
      }

      $scope.displayMonth = $scope.currentDate.getMonth(); //10
      $scope.displayDate = $scope.currentDate.getDate(); //4
      $scope.displayYear = $scope.currentDate.getFullYear(); //2016

      $scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);
      $scope.titleMonth = $scope.titleChanger();
  };

  // ========== changes the currentDate variable to navigate months ==========

  $scope.titleChanger = function(){
    var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    var prettyDisplay = (monthNames[$scope.displayMonth] + " " + $scope.displayYear);
    return prettyDisplay;
  };

  //invoke the function

  $scope.titleMonth = $scope.titleChanger();
}]);

angular.module('rosterRooster')
.controller('admin', ["$scope", "$stateParams", "rService", "availability", "employers", "employees", "users", function($scope,$stateParams,rService,availability,employers,employees,users){
  
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  // console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.availability = availability;
  // console.log('availability =', $scope.availability);
  
  
    // ========== sets employee id number ==========
    $scope.employeeidNumber = 1;
    // ========== sets employer  number ==========
    $scope.employeridNumber = 1;

    // ========== master Variables ==========
    // provides a variable for later use
    $scope.employeeList = [];
    //variable that holds employee object after it's selected
    $scope.currentEmployee = {};////employeeData
    //variable that holds employee login information after it's selected
    $scope.userData = {}//masterUsers
    //variable that holds availble hours per selected employee
    $scope.availHours = {}//emoloyeeAvailable
    //variable that holds selected employee id number
    $scope.selectedIdNumber = $stateParams.id;  //default login id number
    console.log('selected employee number =', $scope.selectedIdNumber)
    // ========== end master Variables ==========
  
    // ========== Fills in VARIABLES  ==========
    // toggles overtime button
    $scope.otChecky = false;
    $scope.otCheckn = false;
    // day parser
    $scope.dayParser = ['m', 'tu', 'w', 'th', 'f', 'st', 'sd'];
  
  // SETS CURRENT EMPLOYEE
    $scope.getCurrentEmployee = function(){
      for (var i = 0; i < employees.length; i++) {
        if(employees[i].id == $scope.selectedIdNumber)
        $scope.currentEmployee = employees[i];
      }
      // console.log($scope.currentEmployee);
    };
        $scope.getCurrentEmployee();
    
  // SETS USER DATA  
    $scope.getUserData = function(){
      for (var i = 0; i < users.length; i++) {
        if(users[i].employeeid == $scope.selectedIdNumber)
        $scope.userData = users[i];
      }
    };
    
  // SETS AVAILABLE HOURS
    $scope.getAvailHours = function(){
      $scope.eAvailEditor = {};
      for (var j = 0; j < availability.length; j++) {
        if(availability[j].employeeid == $scope.selectedIdNumber){
          $scope.eAvailEditor = availability[j]}
          
          for (var k = 0; k < $scope.dayParser.length; k++) {
            if($scope.eAvailEditor[($scope.dayParser[k]+'start')]){
            var st = $scope.eAvailEditor[($scope.dayParser[k]+'start')].split(":");
            $scope.availHours[($scope.dayParser[k]+'start')] = new Date(2000, 00, 1, st[0], st[1]);
          }else{$scope.availHours[($scope.dayParser[k]+'start')] = null};
            if($scope.eAvailEditor[($scope.dayParser[k]+'stop')]){
            var sp = $scope.eAvailEditor[($scope.dayParser[k]+'stop')].split(":");
            $scope.availHours[($scope.dayParser[k]+'stop')] = new Date(2000, 00, 1, sp[0], sp[1]);
          }else{$scope.availHours[($scope.dayParser[k]+'stop')] = null};
          }
      }
    };
    
    //MANAGES OVERTIME CLICK
    
    
    $scope.otChecker = function(){
      if($scope.availHours.overtime = true){
        $scope.otChecky = true;
        $scope.otCheckn = false;
      }else{
        $scope.otChecky = false;
        $scope.otCheckn = true;
      }
    };
    
    $scope.otChecker();
     
    $scope.otYes = function(){
      $scope.otChecky = true;
      $scope.otCheckn = false;
      $scope.availHours.overtime = true;
    };

    $scope.otNo = function(){
      $scope.otChecky = false;
      $scope.otCheckn = true;
      $scope.availHours.overtime = false;
    };
    


    
    // INVOKES THE FUNCTIONS
    
    $scope.getUserData();
    $scope.getAvailHours();
    console.log($scope.currentEmployee);
    console.log($scope.userData);
    console.log($scope.availHours);
    
    // ======================= SAVES AND EXITS VIEW =====================
    // ==================================================================
    
    // SAVES ROOT EMPLOYEE  INFORMATION

    $scope.saveEmployeeData = function(){
    for (var l = 0; l < employees.length; l++) {
      if(employees[l].employeeid == $scope.selectedIdNumber){
        rService.employeeDataPut($scope.currentEmployee);
      }
    }
    };
    
    // SAVES username AND PASSWORD INFORMATION

    $scope.saveMasterUsers = function(){
    for (var m = 0; m < users.length; m++) {
      if(users[m].employeeid == $scope.selectedIdNumber){
        $scope.userData.id = users[m].id;
        rService.masterUsersPut($scope.userData);
      }
    }
    };

    // PARSES AVAILHOURS BACK TO ORIGINAL SYNTAX

    $scope.parseAvailHours = function(){
      
      for (var i = 0; i < $scope.dayParser.length; i++) {
        if($scope.availHours[($scope.dayParser [i] + "start")]){
          var h = $scope.availHours[($scope.dayParser [i] + "start")].getHours();
          var m = $scope.availHours[($scope.dayParser [i] + "start")].getMinutes();
          if (m == 0){m = "00"};
          var joiner = [h, m];
          $scope.availHours[($scope.dayParser [i] + "start")] = joiner.join(':')
        } else {$scope.availHours[($scope.dayParser [i] + "start")] = null};
        
        if($scope.availHours[($scope.dayParser [i] + "stop")]){
          var h = $scope.availHours[($scope.dayParser [i] + "stop")].getHours();
          var m = $scope.availHours[($scope.dayParser [i] + "stop")].getMinutes();
          if (m == 0){m = "00"};
          var joiner = [h, m];
          $scope.availHours[($scope.dayParser [i] + "stop")] = joiner.join(':')
        } else {$scope.availHours[($scope.dayParser [i] + "stop")] = null};  
      }
    };

    // SAVES EMPLOYEE AVAIL

    $scope.saveAvailHours = function(){
      $scope.availHours.employeeid = $scope.selectedIdNumber;
      
      for (var i = 0; i < availability.length; i++) {
        if(availability[i].employeeid = $scope.selectedIdNumber){
          $scope.availHours.id = availability[i].id;
          rService.employeeAvailablePut($scope.availHours);
        }
    }
    };
    
// ========== SAVE AND CLOSE FUNCTION - EDITED EMPLOYEES ONLY ==========

    $scope.saveAndClose = function(){
      
      $scope.saveEmployeeData();
      $scope.saveMasterUsers();
      $scope.parseAvailHours();
      $scope.saveAvailHours();

        console.log("2b SAVED availHours is " , $scope.availHours);
        console.log("2b SAVED userData is " , $scope.userData);
        console.log("2b SAVED currentEmployee is " , $scope.currentEmployee);
        console.log("saved employeeAvailable is " , availability);
        console.log("saved userData is " , users);
        console.log("saved currentEmployee is " , employees);
        
    }; 
    
  }]);
angular.module('rosterRooster')
.controller('adminSchedule', ["$scope", "rService", "$stateParams", "status", "availability", "employers", "employees", "assigned", function($scope, rService, $stateParams, status, availability, employers, employees, assigned){

  $scope.availability = availability;
  // console.log('availability =', $scope.availability);
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  // console.log('employees =', $scope.employees);
  $scope.assigned = assigned;
  // console.log('assigned =', $scope.assigned);
  $scope.status = status;
  // console.log('status =', $scope.assigned);


  // ========== sets employee id number ==========

  $scope.employeeidNumber = 1;
  $scope.employeridNumber = 1;
  
  
  // ========== fills out content of employee lists ==========
  
  // provides a variable for later use
$scope.employeeList = [];
//variable that holds employee object after it's selected
$scope.pickedEmployee = {};////employeeData
//variable that holds availble hours per selected employee
$scope.employeeAvailable = {}//emoloyeeAvailable

  
    // ========== gets userinfo from Employee Id NUMBER ==========
  $scope.getusername = function(){
    for (var i = 0; i < employees.length; i++) {
      if(employees[i].id == $scope.employeeidNumber){
        var userInfo = employees[i];
      }
    }return userInfo;
  }
  $scope.userInfo = $scope.getusername();

  // ========== sets initial date / creates variable to adjust display ==========

  $scope.currentDate = new Date();

  // ========== KEYSTONE VARIABLES, FROM WHICH ALL IS BUILT ==========


  $scope.displayMonth = $scope.currentDate.getMonth(); //10
  $scope.displayDate = $scope.currentDate.getDate(); //4
  $scope.displayYear = $scope.currentDate.getFullYear(); //2016

  // ========== builds parallel arrays for input into object builder ==========

$scope.calendarBuilder = function(month, day, year, empId){

  var dayBuilder = [];
  var monthBuilder = [];
  var yearBuilder = [];
  var textToggler = [];
  // get first and last days in the display month
  var firstDay = new Date(year, month, 1);
  var firstDayInt = firstDay.getDate();
  var lastDay = new Date(year, month + 1, 0);
  var lastDayInt = lastDay.getDate();
  // build an array with the days of the month
  for (var i = 1; i <= lastDayInt; i++) {
      dayBuilder.push(i);
      monthBuilder.push(month);
      yearBuilder.push(year);
      textToggler.push(false);
  }

  //Get previous month
  var pMonth;
  var pYear;
  if (month === 0) {
    pMonth = 11;
    pYear = (year - 1);
  }else{
    pMonth = (month - 1)
    pYear = year;
  };

  //get next month

  var nMonth;
  var nYear;
  if(month === 11){
    nMonth = 0
    nYear = (year + 1)
  }else{
    nMonth = (month + 1);
    nYear = year;
  };

  //get last day of previous month

  var pLastDay = new Date(pYear, nMonth + 1, 0);
  var pLastDayInit = pLastDay.getDate();

  // add to front of array with days from last month

  var firstDayOfWeek = firstDay.getDay();
  if (firstDayOfWeek !== 0) {
      for (var j = pLastDayInit; j > (pLastDayInit - firstDayOfWeek); j--) {
          dayBuilder.unshift(j);
          monthBuilder.unshift(pMonth);
          yearBuilder.unshift(pYear);
          textToggler.unshift(true);
      }
  };

  // fill out rest of array with days from next month
  for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
      dayBuilder.push(k);
      monthBuilder.push(nMonth);
      yearBuilder.push(nYear);
      textToggler.push(true)
  };

    // ========== makes the calendar object ==========
    var finalArray = [];

    for (var l = 0; l < dayBuilder.length; l++) {
        var x = new Object();
        x.day = dayBuilder[l];
        x.month = monthBuilder[l];
        x.year = yearBuilder[l];
        x.notCurrentMonth = textToggler[l];
        finalArray.push(x);
      
    };

    // ========== compares calendar object wi scheduleStatus ==========
    
    var scheduleStatusChecker = status;
    
    for (var m = 0; m < finalArray.length; m++) {
      for (var n = 0; n < scheduleStatusChecker.length; n++) {
        var dateParser = scheduleStatusChecker[n].date.split("-");
        if($scope.employeridNumber === scheduleStatusChecker[n].employerid){
          if ((scheduleStatusChecker[n].published === true) 
            && (("20" + dateParser[2]) == finalArray[m].year)
            && (dateParser[1] == finalArray[m].day)
            && ((dateParser[0]-1) == finalArray[m].month)) {
            finalArray[m].published = true;
          }
          if ((scheduleStatusChecker[n].edited === true)
          && (("20" + dateParser[2]) == finalArray[m].year)
          && (dateParser[1] == finalArray[m].day)
          && ((dateParser[0]-1) == finalArray[m].month)) 
          {
            finalArray[m].edited = true;
          }
        }
      }
      
    }

  
    // console.log(finalArray);
      
    return finalArray;

};

// ========== invoke the function, assigns object to variable ==========

$scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);


// ========== changes the currentDate variable to navigate months ==========

$scope.adjustMonth = function(x) {
    if ($scope.displayDate > 28)
        $scope.currentDate.setDay(27);
    if (($scope.displayMonth  === 0) && x === (-1)) {
        $scope.currentDate.setMonth(11);
        $scope.currentDate.setFullYear($scope.displayYear - 1);
    } else if (($scope.displayMonth === 11) && x === 1) {
        $scope.currentDate.setMonth(0);
        $scope.currentDate.setFullYear($scope.displayYear + 1);
    } else {
        $scope.currentDate.setMonth($scope.displayMonth + x);
    }

    $scope.displayMonth = $scope.currentDate.getMonth(); //10
    $scope.displayDate = $scope.currentDate.getDate(); //4
    $scope.displayYear = $scope.currentDate.getFullYear(); //2016

    $scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);
    $scope.titleMonth = $scope.titleChanger();
};

// ========== changes the currentDate variable to navigate months ==========

$scope.titleChanger = function(){
  var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  var prettyDisplay = (monthNames[$scope.displayMonth] + " " + $scope.displayYear);
  return prettyDisplay;
};

//invoke the function
$scope.titleMonth = $scope.titleChanger();

$scope.timeSender = function(){
  rService.monthHolder = $scope.displayMonth; 
  rService.yearHolder = $scope.displayYear;
}



}]);

angular.module('rosterRooster')
.directive('bars', function(){
  
  return{
    templateUrl: "./views/bars.html",
    link: function(scope, element, attr){
        
      console.log(element);
      element[0].children[0].style.height = scope.bar.s1height;
      element[0].children[1].style.height = scope.bar.barHeight;
      element[0].children[1].style.top = scope.bar.barStart;
      element[0].children[1].style.backgroundColor = scope.bar.barColor;
      element[0].children[2].style.top = scope.bar.s2start;
      element[0].children[2].style.height = scope.bar.s2height;
    }
  }
  
  
  
  
});
angular.module('rosterRooster')
.controller('builder', ["$scope", "$stateParams", "rService", "availability", "employers", "employees", "users", "assigned", "status", function($scope,$stateParams, rService, availability, employers, employees, users, assigned, status){


  $scope.availability = availability;
  console.log('availability =', $scope.availability);
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.status = status;
  // console.log('status =', $scope.status);
  $scope.assigned = assigned;
    // console.log('assigned =', $scope.assigned);


  // ========== sets employee id number ==========
  $scope.employeeidNumber = 1;
  // ========== sets employer  number ==========
  $scope.employeridNumber = 1;

// ========== MASTER VARIABLES ==========
  
// GET DAY
  $scope.selectedMonth = rService.monthHolder;
  $scope.selectedYear = rService.yearHolder;
  $scope.selectedDay = $stateParams.id;
  $scope.theDay = new Date($scope.selectedYear, $scope.selectedMonth, $scope.selectedDay);
// DAY OF THE WEEK 
  $scope.theDoW = $scope.theDay.getDay();
// MASTER COLUMN VALUE
  $scope.activeColumn = 0;
// MASTER LIST OF EMPLOYEES with PERTINANT DATA
  $scope.employeeList = [];
// MASTER LIST OF BAR BUILDER INFORMATION
    $scope.barList = [];
// PICKED EMPLOYEE
  $scope.ePick;//current employee for bottom display
  $scope.idx;//index of epick on employeeList

  
// ========== REFERENCE VARIABLES ==========
  $scope.dayList = ['sd', 'm', 'tu', 'w', 'th', 'f', 'st'];
  
  $scope.timeArray = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
                    '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'];
                    
  //color LIST
  
  $scope.colorList = ['#738A05', '#259286', '#2176C7', '#595AB7', '#D11C24', '#BD3613', '#A57706' ];
                    

  
// =========================================================================
// ========================== EMPLOYEE SCHED. BUILDER ========================
// =========================================================================
  

    $scope.makeEmployeeList = function(){
      var dOtW = $scope.dayList[$scope.theDoW];
      var st = (dOtW)+"start";
      var sp = (dOtW)+"stop";
      
      console.log("AV = ",$scope.availability.length);
      
      for (var i = 0; i < $scope.employees.length; i++) {
        var tempObj = {};
        if($scope.employees[i].employerid == $scope.employeridNumber){
          tempObj.employerid = $scope.employeridNumber;
          tempObj.employeeid = $scope.employees[i].id;
          tempObj.firstname = $scope.employees[i].firstname;
          tempObj.lastname = $scope.employees[i].lastname;
          tempObj.weeklymax = $scope.employees[i].weeklymax;
          tempObj.weeklymin = $scope.employees[i].weeklymin;
          for (var j = 0; j < $scope.availability.length; j++) {
            
            if ($scope.availability[j].employeeid == tempObj.employeeid) {
              tempObj.start = $scope.availability[j][st];
              tempObj.stop = $scope.availability[j][sp];
              tempObj.stWord = st;
              tempObj.spWord = sp;
              console.log(tempObj);
              $scope.employeeList.push(tempObj);
            }
          }
          
        }
      }
    };
$scope.makeEmployeeList();
console.log("$scope.employeeList = ", $scope.employeeList);

    
$scope.employeeEditorToggler = false;

$scope.activeEeditor = function(){
    $scope.employeeEditorToggler = true;
  
};

// =========================================================================
// ========================== DAY SCHEDULER ================================
// =========================================================================
  
  //builds ID's For barHider
  
  $scope.idBuilder = function(){
    var c = $scope.activeColumn;
    $scope.barList[c-1]["id"] = ("column" + c);
    $scope.barList[c-1]["barId"] = ("bar" + c);
    $scope.barList[c-1]["s1id"] = ("shadowA" + c);
    $scope.barList[c-1]["s2id"] = ("shadowB" + c);
  }
  //color assignment
  $scope.colorAssign = function(){
    var c = $scope.activeColumn;
    if ($scope.colorList[c-1]) {
    $scope.barList[c-1].barColor = $scope.colorList[c-1];
  }else{
    $scope.barList[c-1].barColor = $scope.colorList[((c-1)-($scope.colorList.length))]
  }
  };
  

  //shows bars and shadows
  $scope.barHider = function(){
  var c = $scope.activeColumn;
  $scope.barList[c-1]["barShow"] = true;
  $scope.barList[c-1]["shadowShow"] = true;
  if(c > 1){
      $scope.barList[c-2].shadowShow = false;
      console.log($scope.barList[c-2].shadowShow);
    }
  };

  //parses time data into height and starting points
  $scope.barBuilder = function(){
    console.log($scope.employeeList[$scope.idx].start);
  var splitter = $scope.employeeList[$scope.idx].start.split(':');
  var splitterB = $scope.employeeList[$scope.idx].stop.split(':');
  
  // builds start
  var start = (((splitter[0]*1) * 36) + 55) + "px";
  var c = $scope.activeColumn;
  $scope.barList[c-1]["barStart"] = start;
  
  // builds height
  var height = (((splitterB[0]*1)-(splitter[0]*1))*36) + "px";
  $scope.barList[c-1]["barHeight"] = height;
  
  // assigns color
  if ($scope.colorList[c-1]) {
  $scope.barList[c-1].barColor = $scope.colorList[c-1];
  }else{
  $scope.barList[c-1].barColor = $scope.colorList[((c-1)-($scope.colorList.length))]
  }
  var color = $scope.barList[c-1].barColor;
  // callback function
  $scope.barLoader(start,height,color);
  };
  
  
$scope.barLoader = function(start,height,color){
  var c = $scope.activeColumn;
  // console.log(start,height);
  $('#'+$scope.barList[c-1]['barId']).css({top:start,height:height, 'background-color':color});
  console.log('#'+$scope.barList[c-1]['barId']);
}

//Shadow Builder / Loader

$scope.shadowBuilder = function(){
  var c = $scope.activeColumn;
  var splitter = $scope.employeeList[$scope.idx].start.split(':');
  var splitterB = $scope.employeeList[$scope.idx].stop.split(':');
  
  var s1height = (((splitter[0]*1)*36)+'px');
  $scope.barList[c-1]["s1height"] = s1height;
  
  var s2start = ((((splitterB[0]*1)*36)+55)+'px');
  $scope.barList[c-1]["s2start"] = s2start;
  
  var s2height = ((24-(splitterB[0]*1))*36)+'px';
  $scope.barList[c-1]["s2height"] = s2height;
  
  $scope.shadowLoader(s1height, s2start, s2height);
};

$scope.shadowLoader = function(s1height, s2start, s2height){
  var c = $scope.activeColumn;
  $('#'+$scope.barList[c-1]["s1id"]).css('height', s1height);
  $('#'+$scope.barList[c-1]["s2id"]).css({height:s2height, top:s2start});
}


//populates first and last name to bar / and start stop information
$scope.barText = function(){
  var c = $scope.activeColumn;
  var ix = $scope.idx;
  $scope.barList[c-1].firstname = $scope.employeeList[ix].firstname;
  $scope.barList[c-1].lastname = $scope.employeeList[ix].lastname;
  $scope.barList[c-1].employeeid = $scope.employeeList[ix].employeeid;
  var startParser = $scope.employeeList[ix].start.split(":");
  var stopParser = $scope.employeeList[ix].stop.split(":");
  if((startParser[0]*1) < 12){  
    $scope.barList[c-1].start = (startParser[0]+"AM")
  }else if((startParser[0]*1) == 0){
    $scope.barList[c-1].start = (12+"AM")
  }else{
    $scope.barList[c-1].start = ((startParser[0]*1)-12)+"PM"
  };
  if((stopParser[0]*1) < 12){  
    $scope.barList[c-1].stop = (stopParser[0]+"AM")
  }else if((stopParser[0]*1) == 0){
    $scope.barList[c-1].stop = (12+"AM")
  }else{
    $scope.barList[c-1].stop = ((stopParser[0]*1)-12)+"PM"
  };
};

// TIME EDITOR

$scope.timeHolder = {};

$scope.startStopTime = function(){
  $scope.editToggler = true;
  var c = $scope.activeColumn;
  var tS = $scope.employeeList[$scope.idx].start.split(':');
  var tSDate = new Date(2000, 00, 1, tS[0], tS[1]);
    $scope.timeHolder.start = tSDate;
  var tSp = $scope.employeeList[$scope.idx].stop.split(':');
  var tSpDate = new Date(2000, 00, 1, tSp[0], tSp[1]);
    $scope.timeHolder.stop = tSpDate;
    
};

//RETURNS RESULT TO A READABLE FORMAT

$scope.returnTime = function(){
  var c = $scope.activeColumn;
    var tS = $scope.timeHolder.start;
    var ha = tS.getHours();
    var ma = tS.getMinutes();
    var joinera = [ha, ma];
  $scope.employeeList[$scope.idx].start = joinera.join(':');
  $scope.barList[c-1].start = joinera.join(':');
    var tSp = $scope.timeHolder.stop;
    var hb = tSp.getHours();
    var mb = tSp.getMinutes();
    var joinerb = [hb, mb];
  $scope.employeeList[$scope.idx].stop = joinerb.join(':');
  $scope.barList[c-1].stop = joinerb.join(':');
  $scope.editToggler = false;
  $scope.barBuilder();
  $scope.barText();
  console.log("barList @ timeEditor = ", $scope.barList);
  console.log("emloyeeList @ timeEditor = ", $scope.employeeList);
}
// CANCELS TIME EDITOR

$scope.cancelStSp = function(){
  $scope.editToggler = false;
};

$scope.boxToggler = false;
$scope.editToggler = false;

// Returns employee id;
$scope.employeePick = function($index){
  $scope.idx = $index;
  // sets the active column, bro
  $scope.activeColumn+=1;
  //pushes empty object to barList
  tempObj = {};
  $scope.barList.push(tempObj);
  // calls all the builder functions
  $scope.ePick = $scope.employeeList[$index];
  $scope.employeeEditorToggler = false;
  $scope.boxToggler = true;
  $scope.idBuilder();
  $scope.colorAssign();
  $scope.barHider();
  $scope.barBuilder();
  $scope.barText();
  $scope.shadowBuilder();
  console.log("ePick = ", $scope.ePick);
  console.log("active column = ",$scope.activeColumn);
  console.log("barList = ", $scope.barList);
};
// =========================================================================
// ========================== SAVE, CLOSE, CANCEL ========+=================
// =========================================================================

// SAVE THE DAY

$scope.saveDay = function(){
  var m = $scope.theDay.getMonth()+1;
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getFullYear().toString().substr(2,2)
  var theDate = (m + "-" + d + "-" + y);
  var aH = $scope.assigned.length;
  var ss = $scope.status.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;
  var postList = [];
  
  console.log("employeeList = ",$scope.employeeList.length);
  for (var t = 0; t < $scope.barList.length; t++) {
    for (var u = 0; u < $scope.employeeList.length; u++) {
    if ($scope.employeeList[u].employeeid == $scope.barList[t].employeeid){
      postList.push($scope.employeeList[u])
    }
    }
  }
  
  for (var i = 0; i < postList.length; i++) {
    for (var k = 0; k < $scope.assigned.length; k++) {
      exists = false;
      if(($scope.assigned[k].employeeid == postList[i].employeeid) &&
      ($scope.assigned[k].date == theDate)){
        $scope.assigned[k].start = postList[i].start;
        $scope.assigned[k].stop = postList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = (aH + i);
      tempObj.employeeid = postList[i].employeeid;
      tempObj.employerid = $scope.employeridNumber;
      tempObj.date = theDate;
      tempObj.start = postList[i].start;
      tempObj.stop = postList[i].stop;
      rService.assignedHoursPost(tempObj);
      console.log("assigned",tempObj);
    }
  };
    var saveTrigger = false;
  
    for (var j = 0; j < $scope.status.length; j++) {
      if(($scope.status[j].employerid ==  $scope.employeridNumber)
      &&($scope.status[j].date == theDate)){
        $scope.status[j].edited = true;
        $scope.status[j].published = false;
      }else{ saveTrigger = true;}  
    }
    if(saveTrigger  == true){
      tempObjB.id = (ss + 1);
      tempObjB.employerid = $scope.employeridNumber;
      tempObjB.date = theDate;
      tempObjB.published = false;
      tempObjB.edited = true;
      rService.scheduleStatusPost(tempObjB);
      
      saveTrigger = false;
    }console.log("status",tempObjB);

    // console.log(' scheduleStatus upon publish =',$scope.status);
    // console.log(' assignedHours upon publish =',$scope.assigned);
};

// PUBLISH THE DAY

$scope.publishDay = function(){
  var m = $scope.theDay.getMonth()+1;
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getFullYear().toString().substr(2,2)
  var postList = [];
  var theDate = (m + "-" + d + "-" + y);
  var aH = $scope.assigned.length;
  var ss = $scope.status.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;

  for (var i = 0; i < postList.length; i++) {
    for (var k = 0; k < $scope.assigned.length; k++) {
      exists = false;
      if(($scope.assigned[k].employeeid == postList[i].employeeid) &&
      ($scope.assigned[k].date == theDate)){
        $scope.assigned[k].start = postList[i].start;
        $scope.assigned[k].stop = postList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = (aH + 1);
      tempObj.employeeid = postList[i].employeeid;
      tempObj.employerid = $scope.employeridNumber;
      tempObj.date = theDate
      tempObj.start = postList[i].start;
      tempObj.stop = postList[i].stop;
    
      rService.assignedHoursPost(tempObj);
      
    }
  };console.log("assigned",tempObj);
        publishTrigger = false;
  
    for (var j = 0; j < $scope.status.length; j++) {
      if(($scope.status[j].employerid ==  $scope.employeridNumber)
      &&($scope.status[j].date == theDate)){
        $scope.status[j].edited = true;
        $scope.status[j].published = true;
      }else{
        publishTrigger = true;
      }
    }
    
    if(publishTrigger == true){
    tempObjB.id = (ss +1);
    tempObjB.employerid = $scope.employeridNumber;
    tempObjB.date = theDate;
    tempObjB.published = true;
    tempObjB.edited = true;
    $scope.status[j] = tempObjB;
    console.log("status",tempObjB);
    rService.scheduleStatusPost(tempObjB);
    publishTrigger = false;
  }
    
    // console.log(' scheduleStatus upon publish =',$scope.status);
    // console.log(' assignedHours upon publish =',$scope.assigned);
  };


}]);
angular.module('rosterRooster')
.controller('employee', ["$scope", "$window", "rService", "availability", "employers", "employees", "users", function($scope,$window,rService,availability,employers,employees,users){
  
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  // console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.availability = availability;
  // console.log('availability =', $scope.availability);
  
  
  // ========== sets employee id number ==========
  $scope.employeeidNumber = 1;
  // ========== sets employer  number ==========
  $scope.employeridNumber = 1;

  // ========== master Variables ==========
  // provides a variable for later use
  $scope.employeeList = [];
  //variable that holds employee object after it's selected
  $scope.currentEmployee = {};////employeeData
  //variable that holds employee login information after it's selected
  $scope.userData = {}//masterUsers
  //variable that holds availble hours per selected employee
  $scope.availHours = {}//emoloyeeAvailable
  //variable that holds selected employee id number
  $scope.selectedIdNumber = $scope.employeeidNumber;  //default login id number
  // ========== end master Variables ==========
  
  
  // ==========  BUILDS MAIN PAGE LIST ==========
  
  $scope.employeeLister = function(){
    var tempList = [];
    // console.log("employeeData is " , rService.employeeData);
    for (var i = 0; i < $scope.employees.length; i++) {
        if ($scope.employeridNumber == $scope.employees[i].employerid){
        tempList.push($scope.employees[i]);
        $scope.employeeList.push($scope.employees[i]);
      }
    }
    // console.log("employeeLister availHours is " , $scope.availHours);
    // console.log("employeeLister userData is " , $scope.userData);
    // console.log("employeeLister currentEmployee is " , $scope.currentEmployee);
    return tempList;
  };
  // ==========  ENDS MAIN PAGE LIST ==========
  
  }]);
angular.module('rosterRooster')
.controller('landing', ["$scope", "rService", function($scope, rService){

  $scope.pageTitle = {
    title: "ROSTER ROOSTER",
    subtitle: "WELCOME"
  }
  // fake modal show/hide

  $scope.called = false;
  $scope.hide = function(){
    $scope.called = false
  }

  $scope.login = function(){
    
  }
  
  $scope.newAcct = function(){
    $scope.called = true;
    console.log($scope.called);
  }

// set username and password




}]);

angular.module('rosterRooster')
.directive('rrNav', function(){
return{
  restrict: 'E',
  templateUrl: './views/nav.html',
  link: function( scope, element, attributes ) {
    
    scope.flipper = false;
    scope.adminFlipper = false;
    
    scope.userMenuToggler = function(){
      scope.flipper = true;
    };
    scope.userMenuTogglerOff = function(){
      scope.flipper = false;
    };
    scope.adminMenuToggler = function(){
      scope.adminFlipper = true;
    };
    scope.adminMenuTogglerOff = function(){
      scope.adminFlipper = false;
    };
    
  }
};



});

angular.module('rosterRooster')
.controller('new', ["$scope", "$stateParams", "rService", "availability", "employers", "employees", "users", function($scope,$stateParams,rService, availability, employers, employees, users ){
  
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  // console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.availability = availability;
  // console.log('availability =', $scope.availability);
  
  
  
  // ========== sets employee id number ==========
  $scope.employeeidNumber = 1;
  // ========== sets employer  number ==========
  $scope.employeridNumber = 1;
  
  // ========== master Variables ==========
  // provides a variable for later use
  $scope.employeeList = [];
  //variable that holds employee object after it's selected
  $scope.currentEmployee = {};////employeeData
  //variable that holds employee login information after it's selected
  $scope.userData = {}//masterUsers
  //variable that holds availble hours per selected employee
  $scope.availHours = {}//emoloyeeAvailable
  //variable that holds selected employee id number
  $scope.selectedIdNumber = $scope.employeeidNumber;  //default login id number
  // ========== end master Variables ==========
  
  // GETS NEXT AVAILABLE EMPLOYEE ID
  
  $scope.nextId = function(){
    var tempList = [];
    for (var i = 0; i < $scope.employees.length; i++) {
      tempList.push($scope.employees[i].id)
    }
    var x = (tempList.pop() + 1);
    return x;
  };
  
  //SETS UP VARIABLES
  
  $scope.selectedIdNumber = $scope.nextId();
  
  $scope.currentEmployee.employerid = $scope.employeridNumber;
  $scope.currentEmployee.id = $scope.selectedIdNumber;
  
  $scope.availHours.employeeid = $scope.selectedIdNumber;
  
  $scope.userData.employerid = $scope.employeridNumber;
  $scope.userData.employeeid = $scope.selectedIdNumber;
  
  // toggles overtime button
  $scope.otChecky = false;
  $scope.otCheckn = false;
  
  //manages overtime click

  $scope.otYes = function(){
    $scope.otChecky = true;
    $scope.otCheckn = false;
    $scope.availHours.overtime = true;
  };

  $scope.otNo = function(){
    $scope.otChecky = false;
    $scope.otCheckn = true;
    $scope.availHours.overtime = false;
  };
  
  // day parser
  $scope.dayParser = ['m', 'tu', 'w', 'th', 'f', 'st', 'sd'];
  
  // shows weekdays when selected
  $scope.allDays = function(){
    for (var i = 1; i < ($scope.dayParser.length); i++) {
      $scope.availHours[($scope.dayParser[i]+'start')] = $scope.availHours.mstart;
      $scope.availHours[($scope.dayParser[i]+'stop')] = $scope.availHours.mstop;
    }
    $scope.weekYes = false;
    $scope.allYes = true;
    $scope.showRestDays = true;
  };
  
  $scope.weekdays = function(){
    for (var i = 1; i < ($scope.dayParser.length - 2); i++) {
      $scope.availHours[($scope.dayParser[i]+'start')] = $scope.availHours.mstart;
      $scope.availHours[($scope.dayParser[i]+'stop')] = $scope.availHours.mstop;
    }
    for (var i = 5; i < $scope.dayParser.length; i++) {
      $scope.availHours[($scope.dayParser[i]+'start')] = null;
      $scope.availHours[($scope.dayParser[i]+'stop')] = null;
    }

    $scope.weekYes = true;
    $scope.allYes = false;
    $scope.showRestDays = true;
  };
  
  $scope.newSaveEmployeeData = function(){
    var x = $scope.selectedIdNumber;
    rService.employeeDataPost($scope.currentEmployee);
  };


  // SAVES username AND PASSWORD INFORMATION

  $scope.newSaveMasterUsers = function(){
   var x = ($scope.users.length);
   $scope.userData.id = (x + 1);
   console.log("userData =  ", $scope.userData);
   rService.masterUsersPost($scope.userData);
  };

  // PARSES AVAILHOURS BACK TO ORIGINAL SYNTAX

  $scope.parseAvailHours = function(){
    
    for (var i = 0; i < $scope.dayParser.length; i++) {
      if($scope.availHours[($scope.dayParser [i] + "start")]){
        var h = $scope.availHours[($scope.dayParser [i] + "start")].getHours();
        var m = $scope.availHours[($scope.dayParser [i] + "start")].getMinutes();
        if (m == 0){m = "00"};
        var joiner = [h, m];
        $scope.availHours[($scope.dayParser [i] + "start")] = joiner.join(':')
      } else {$scope.availHours[($scope.dayParser [i] + "start")] = null};
      
      if($scope.availHours[($scope.dayParser [i] + "stop")]){
        var h = $scope.availHours[($scope.dayParser [i] + "stop")].getHours();
        var m = $scope.availHours[($scope.dayParser [i] + "stop")].getMinutes();
        if (m == 0){m = "00"};
        var joiner = [h, m];
        $scope.availHours[($scope.dayParser [i] + "stop")] = joiner.join(':')
      } else {$scope.availHours[($scope.dayParser [i] + "stop")] = null};  
    }
  };
  
  // SAVES AVAILABILITY
  $scope.newSaveAvailHours = function(){
    $scope.availHours.employeeid = $scope.selectedIdNumber;
    var x = ($scope.availability.length);
    $scope.availHours.id = (x + 1);
    rService.employeeAvailablePost($scope.availHours);
  };


  // ========== NEW SAVE AND CLOSE FUNCTION  ==========

  $scope.saveAndCloseNew = function(){
    
    $scope.newSaveEmployeeData();
    $scope.newSaveMasterUsers();
    $scope.parseAvailHours();
    $scope.newSaveAvailHours();

      console.log("2b SAVED availHours is " , $scope.availHours);
      console.log("2b SAVED userData is " , $scope.userData);
      console.log("2b SAVED currentEmployee is " , $scope.currentEmployee);
      console.log("saved employeeAvailable is " , $scope.availability);
      console.log("saved userData is " , $scope.users);
      console.log("saved currentEmployee is " , $scope.employees);

  }; 

  }]);
angular.module('rosterRooster')
.controller('schedule', ["$scope", "rService", "employers", "employees", "assigned", function($scope, rService, employers, employees, assigned) {

  
    $scope.employers = employers;
    console.log('employers =', $scope.employers);
    $scope.employees = employees;
    console.log('employees =', $scope.employees);
    $scope.assigned = assigned;
    console.log('assigned =', $scope.assigned);
    
    // ========== sets employee id number ==========

    $scope.employeeidNumber = 1;
    $scope.employeridNumber = 1;

    // ========== sets initial date / creates variable to adjust display ==========

    $scope.currentDate = new Date();

    // ========== KEYSTONE VARIABLES, FROM WHICH ALL IS BUILT ==========


    $scope.displayMonth = $scope.currentDate.getMonth(); //10
    $scope.displayDate = $scope.currentDate.getDate(); //4
    $scope.displayYear = $scope.currentDate.getFullYear(); //2016

    // ========== builds parallel arrays for input into object builder ==========

  $scope.calendarBuilder = function(month, day, year, empId){

    var dayBuilder = [];
    var monthBuilder = [];
    var yearBuilder = [];
    var textToggler = [];
    // get first and last days in the display month
    var firstDay = new Date(year, month, 1);
    var firstDayInt = firstDay.getDate();
    var lastDay = new Date(year, month + 1, 0);
    var lastDayInt = lastDay.getDate();
    // build an array with the days of the month
    for (var i = 1; i <= lastDayInt; i++) {
        dayBuilder.push(i);
        monthBuilder.push(month);
        yearBuilder.push(year);
        textToggler.push(false);
    }

    //Get previous month
    var pMonth;
    var pYear;
    if (month === 0) {
      pMonth = 11;
      pYear = (year - 1);
    }else{
      pMonth = (month - 1)
      pYear = year;
    };

    //get next month

    var nMonth;
    var nYear;
    if(month === 11){
      nMonth = 0
      nYear = (year + 1)
    }else{
      nMonth = (month + 1);
      nYear = year;
    };

    //get last day of previous month

    var pLastDay = new Date(pYear, nMonth + 1, 0);
    var pLastDayInit = pLastDay.getDate();

    // add to front of array with days from last month

    var firstDayOfWeek = firstDay.getDay();
    if (firstDayOfWeek !== 0) {
        for (var j = pLastDayInit; j > (pLastDayInit - firstDayOfWeek); j--) {
            dayBuilder.unshift(j);
            monthBuilder.unshift(pMonth);
            yearBuilder.unshift(pYear);
            textToggler.unshift(true);
        }
    };

    // fill out rest of array with days from next month
    for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
        dayBuilder.push(k);
        monthBuilder.push(nMonth);
        yearBuilder.push(nYear);
        textToggler.push(true)
    };

      // ========== makes the calendar object ==========
      var finalArray = [];

      for (var l = 0; l < dayBuilder.length; l++) {
          var x = new Object();
          x.day = dayBuilder[l];
          x.month = monthBuilder[l];
          x.year = yearBuilder[l];
          x.notCurrentMonth = textToggler[l];
          finalArray.push(x);
        
      };

    // ========== compares calendar object wi database ==========


    var assignedHours = assigned;

    console.log(assignedHours);
    
    for (var m = 0; m < finalArray.length; m++) {
      for (var n = 0; n < assignedHours.length; n++) {
          var dateParser = assignedHours[n].date.split("-");
          if((assignedHours[n].employeeid === empId )
              && ((dateParser[0] - 1) == finalArray[m].month)
              && (dateParser[1] == finalArray[m].day)
              && (("20" + dateParser[2]) == finalArray[m].year)
            ){
            finalArray[m].work = true;
          }
      }
    };

    // console.log(finalArray);
    return finalArray;

};

// ========== invoke the function, assigns object to variable ==========

$scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);


// ========== changes the currentDate variable to navigate months ==========

$scope.adjustMonth = function(x) {
    if ($scope.displayDate > 28)
        $scope.currentDate.setDay(27);
    if (($scope.displayMonth  === 0) && x === (-1)) {
        $scope.currentDate.setMonth(11);
        $scope.currentDate.setFullYear($scope.displayYear - 1);
    } else if (($scope.displayMonth === 11) && x === 1) {
        $scope.currentDate.setMonth(0);
        $scope.currentDate.setFullYear($scope.displayYear + 1);
    } else {
        $scope.currentDate.setMonth($scope.displayMonth + x);
    }

    $scope.displayMonth = $scope.currentDate.getMonth(); //10
    $scope.displayDate = $scope.currentDate.getDate(); //4
    $scope.displayYear = $scope.currentDate.getFullYear(); //2016

    $scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeidNumber);
    $scope.titleMonth = $scope.titleChanger();
};

// ========== changes the currentDate variable to navigate months ==========

$scope.titleChanger = function(){
  var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  var prettyDisplay = (monthNames[$scope.displayMonth] + " " + $scope.displayYear);
  return prettyDisplay;
};

//invoke the function

$scope.titleMonth = $scope.titleChanger();








}]);
