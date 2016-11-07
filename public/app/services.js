angular.module('rosterRooster').service('rService', function(){

this.masterUsers = [
  {
    "id": 1,
    "userName": "BigMclargehuge",
    "password": "kittys1",
    "employerId": 1,
    "employeeId": 1,
    "admin": true,
    "email": "jediSexCobra69@angelfire.org"
  },
  {
    "id": 2,
    "userName": "Flooger",
    "password": 123,
    "employerId": 1,
    "employeeId": 2,
    "admin": false,
    "email": "ninjaShark45@yup.com"
  },
  {
    "id": 3,
    "userName": "Peck",
    "password": 123,
    "employerId": 1,
    "employeeId": 3,
    "admin": false,
    "email": "wampaFIGHT@lycos.com"
  },
  {
    "id": 4,
    "userName": "Slab",
    "password": 123,
    "employerId": 1,
    "employeeId": 4,
    "admin": false,
    "email": "larpFan12@delaware.gov"
  },
  {
    "id": 5,
    "userName": "Flint",
    "password": 123,
    "employerId": 1,
    "employeeId": 5,
    "admin": false,
    "email": "stargateFan69@hotmail.com"
  },
  {
    "id": 6,
    "userName": "Slade",
    "password": 123,
    "employerId": 1,
    "employeeId": 6,
    "admin": false,
    "email": "burntPopcorn@ninjas.com"
  },
  {
    "id": 7,
    "userName": "Brick",
    "password": 123,
    "employerId": 1,
    "employeeId": 7,
    "admin": false,
    "email": "fartHugger@ponies.com"
  },
  {
    "id": 8,
    "userName": "Roll",
    "password": 123,
    "employerId": 1,
    "employeeId": 8,
    "admin": false,
    "email": "NCISisTheBest@oldpeople.com"
  },
  {
    "id": 9,
    "userName": "Dirk",
    "password": 123,
    "employerId": 1,
    "employeeId": 9,
    "admin": false,
    "email": "poopTwizzler@aarp.com"
  }
]

this.employers=
[
  {
    "id": 1,
    "employerName": "Good Clips",
    "mOpen": "7:00",
    "mClose": "19:00",
    "tuOpen": "7:00",
    "tuClose": "19:00",
    "wOpen": "7:00",
    "wClose": "19:00",
    "thOpen": "7:00",
    "thClose": "19:00",
    "fOpen": "7:00",
    "fClose": "19:00",
    "stOpen": "7:00",
    "stClose": "19:00",
    "sdOpen": "7:00",
    "sdClose": "19:00"
  },
  {
    "id": 2,
    "employerName": "Bloodhound Inc",
    "mOpen": "9:00",
    "mClose": "17:00",
    "tuOpen": "9:00",
    "tuClose": "17:00",
    "wOpen": "9:00",
    "wClose": "17:00",
    "thOpen": "9:00",
    "thClose": "17:00",
    "fOpen": "9:00",
    "fClose": "17:00",
    "stOpen": "",
    "stClose": "",
    "sdOpen": "",
    "sdClose": ""
  },
  {
    "id": 3,
    "employerName": "PAM Industries",
    "mOpen": "8:00",
    "mClose": "17:00",
    "tuOpen": "8:00",
    "tuClose": "17:00",
    "wOpen": "8:00",
    "wClose": "17:00",
    "thOpen": "8:00",
    "thClose": "17:00",
    "fOpen": "8:00",
    "fClose": "17:00",
    "stOpen": "",
    "stClose": "",
    "sdOpen": "",
    "sdClose": ""
  }
];

this.employeeAvailable = [
  {
    "id": 1,
    "employeeId": 1,
    "overtime": true,
    "mStart": '7:00',
    "mStop": '17:00',
    "tuStart": '7:00',
    "tuStop": '17:00',
    "wStart": '7:00',
    "wStop": '17:00',
    "thStart":'7:00',
    "thStop": '17:00',
    "fStart": '7:00',
    "fStop": '17:00',
    "stStart": "",
    "stStop": "",
    "sdStart": "",
    "sdStop": ""
  },

];

this.assignedHours = [
  {
    "id": 1,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-2-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 2,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-3-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 3,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-4-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 4,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-5-16",
    "start": "3:30",
    "stop": "14:30"
  },
  {
    "id": 5,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-9-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 6,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-10-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 7,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-11-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 8,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-12-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 9,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-16-16",
    "start": "2:00",
    "stop": "8:00"
  },
  {
    "id": 10,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-17-16",
    "start": "3:30",
    "stop": "4:30"
  },
  {
    "id": 11,
    "employerId": 1,
    "employeeId": 1,
    "date": "12-18-16",
    "start": "7:00",
    "stop": "3:00"
  },
  {
    "id": 12,
    "employerId": 1,
    "employeeId": 2,
    "date": "12-2-16",
    "start": "7:00",
    "stop": "14:30"
  },
  {
    "id": 13,
    "employerId": 1,
    "employeeId": 3,
    "date": "12-2-16",
    "start": "12:00",
    "stop": "17:00"
  },
  {
    "id": 14,
    "employerId": 1,
    "employeeId": 4,
    "date": "12-2-16",
    "start": "13:00",
    "stop": "19:00"
  },
  {
    "id": 15,
    "employerId": 1,
    "employeeId": 5,
    "date": "12-2-16",
    "start": "13:00",
    "stop": "17:00"
  },
  {
    "id": 16,
    "employerId": 1,
    "employeeId": 6,
    "date": "12-2-16",
    "start": "15:00",
    "stop": "19:00"
  }
];

this.scheduleStatus = [
  {
    "id": 1,
    "employerId": 1,
    "date": "11-16-16",
    "published": true,
    "edited": true
  },
  {
    "id": 2,
    "employerId": 1,
    "date": "11-17-16",
    "published": true,
    "edited": true
  },
  {
    "id": 3,
    "employerId": 1,
    "date": "11-18-16",
    "published": true,
    "edited": true
  },
  {
    "id": 4,
    "employerId": 1,
    "date": "11-19-16",
    "published": true,
    "edited": true
  },
  {
    "id": 5,
    "employerId": 1,
    "date": "11-20-16",
    "published": false,
    "edited": true
  },
  {
    "id": 6,
    "employerId": 1,
    "date": "11-21-16",
    "published": false,
    "edited": true
  }

];


this.employeeData = [
  {
    "id": 1,
    "employerId": 1,
    "firstName": "Big",
    "lastName": "McLargehuge",
    "mInitial": "D",
    "weeklyMax": 40,
    "weeklyMin": 35
  },
  {
    "id": 2,
    "employerId": 1,
    "firstName": "Flooger",
    "lastName": "Boogerson",
    "mInitial": "F",
    "weeklyMax": 40,
    "weeklyMin": 30
  },
  {
    "id": 3,
    "employerId": 1,
    "firstName": "Peck",
    "lastName": "Squatthrust",
    "mInitial": "G",
    "weeklyMax": 30,
    "weeklyMin": 20
  },
  {
    "id": 4,
    "employerId": 1,
    "firstName": "Slab",
    "lastName": "Mandible",
    "mInitial": "G",
    "weeklyMax": 20,
    "weeklyMin": 10
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
