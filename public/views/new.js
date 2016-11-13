angular.module('rosterRooster')
.controller('new', function($scope,$stateParams,rService, availability, employers, employees, users ){
  
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

  });