angular.module('rosterRooster').service('rService', function(){

this.masterUsers = [
  {
    "id": 1,
    "userName": "BigMclargehuge",
    "password": "kittys1",
    "employer id": 1,
    "employee id": 1,
    "admin": true
  },
  {
    "id": 2,
    "userName": "Flooger",
    "password": 123,
    "employer id": 1,
    "employee id": 2,
    "admin": false
  },
  {
    "id": 3,
    "userName": "Peck",
    "password": 123,
    "employer id": 1,
    "employee id": 3,
    "admin": false
  },
  {
    "id": 4,
    "userName": "Slab",
    "password": 123,
    "employer id": 1,
    "employee id": 4,
    "admin": false
  },
  {
    "id": 5,
    "userName": "Flint",
    "password": 123,
    "employer id": 1,
    "employee id": 5,
    "admin": false
  },
  {
    "id": 6,
    "userName": "Slade",
    "password": 123,
    "employer id": 1,
    "employee id": 6,
    "admin": false
  },
  {
    "id": 7,
    "userName": "Brick",
    "password": 123,
    "employer id": 1,
    "employee id": 7,
    "admin": false
  },
  {
    "id": 8,
    "userName": "Roll",
    "password": 123,
    "employer id": 1,
    "employee id": 8,
    "admin": false
  },
  {
    "id": 9,
    "userName": "Dirk",
    "password": 123,
    "employer id": 1,
    "employee id": 9,
    "admin": false
  }
];

this.employeeAvailable = [
  {
    "id": 1,
    "employeeId": 1,
    "mStart": "",
    "mStop": "",
    "mStart2": "",
    "mStop2": "",
    "tuStart": "7:00",
    "tuStop": "3:00",
    "tuStart2": "",
    "tuStop2": "",
    "wStart": "7:00",
    "wStop": "5:00",
    "wStart2": "",
    "wStop2": "",
    "thStart": "7:00",
    "thStop": "5:00",
    "thStart2": "",
    "thStop2": "",
    "fStart": "7:00",
    "fStop": "5:00",
    "fStart2": "",
    "fStop2": "",
    "stStart": "",
    "stStop": "",
    "stStart2": "",
    "stStop2": "",
    "sdStart": "",
    "sdStop": "",
    "sdStart2": "",
    "sdStop2": ""
  }
];

this.assignedHours = [
  {
    "id": 1,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-2-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 2,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-3-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 3,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-4-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 4,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-5-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 5,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-9-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 6,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-10-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 7,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-11-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 8,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-12-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 9,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-16-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 10,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-17-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 11,
    "employerId": 1,
    "employeeId": 1,
    "date": "11-18-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 12,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 13,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 14,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 15,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 16,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 17,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 18,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 19,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 20,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  },
  {
    "id": 21,
    "employerId": "",
    "employeeId": "",
    "date": "",
    "start": "",
    "stop": ""
  }
];


});


angular.module("rosterRooster")
  .service("localStorageService", function($http) {

    this.store = function(name, data) {
      localStorage.setItem(name, JSON.stringify(data));
      return 'saved';
    };

    this.get = function(name) {
      var item = localStorage.getItem(name);
      return JSON.parse(item);
    };

  });
