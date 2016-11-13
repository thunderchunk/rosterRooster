angular.module('rosterRooster').service('rService', function($http){

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


});



