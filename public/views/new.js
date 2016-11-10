angular.module('rosterRooster').controller('new', function($scope,$stateParams,rService){
  // ========== sets employee id number ==========
  $scope.employeeIdNumber = 1;
  // ========== sets employer  number ==========
  $scope.employerIdNumber = 1;
  
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
  $scope.selectedIdNumber = $scope.employeeIdNumber;  //default login id number
  // ========== end master Variables ==========
  
  // GETS NEXT AVAILABLE EMPLOYEE ID
  
  $scope.nextId = function(){
    var tempList = [];
    for (var i = 0; i < rService.employeeData.length; i++) {
      tempList.push(rService.employeeData[i].id)
    }
    var x = (tempList.pop() + 1);
    return x;
  };
  
  //SETS UP VARIABLES
  
  $scope.selectedIdNumber = $scope.nextId();
  
  $scope.currentEmployee.employerId = $scope.employerIdNumber;
  $scope.currentEmployee.id = $scope.selectedIdNumber;
  
  $scope.availHours.employeeId = $scope.selectedIdNumber;
  
  $scope.userData.employerId = $scope.employerIdNumber;
  $scope.userData.employeeId = $scope.selectedIdNumber;
  
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

  $scope.weekdays = function(){
    for (var i = 1; i < ($scope.dayParser.length - 2); i++) {
      $scope.availHours[($scope.dayParser[i]+'Start')] = $scope.availHours.mStart;
      $scope.availHours[($scope.dayParser[i]+'Stop')] = $scope.availHours.mStop;
    }
    for (var i = 5; i < $scope.dayParser.length; i++) {
      $scope.availHours[($scope.dayParser[i]+'Start')] = null;
      $scope.availHours[($scope.dayParser[i]+'Stop')] = null;
    }
    $scope.weekYes = true;
    $scope.allYes = false;
    $scope.showRestDays = true;
  };
  
  $scope.newSaveEmployeeData = function(){
    var x = $scope.selectedIdNumber;
    rService.employeeData[x - 1] = $scope.currentEmployee;
  };


  // SAVES USERNAME AND PASSWORD INFORMATION

  $scope.newSaveMasterUsers = function(){
   var x = (rService.masterUsers.length);
   $scope.userData.id = x;
   rService.masterUsers[x] = $scope.userData;
  };

  // PARSES AVAILHOURS BACK TO ORIGINAL SYNTAX

  $scope.parseAvailHours = function(){
    
    for (var i = 0; i < $scope.dayParser.length; i++) {
      if($scope.availHours[($scope.dayParser [i] + "Start")]){
        var h = $scope.availHours[($scope.dayParser [i] + "Start")].getHours();
        var m = $scope.availHours[($scope.dayParser [i] + "Start")].getMinutes();
        var joiner = [h, m];
        $scope.availHours[($scope.dayParser [i] + "Start")] = joiner.join(':')
      } else {$scope.availHours[($scope.dayParser [i] + "Start")] = null};
      
      if($scope.availHours[($scope.dayParser [i] + "Stop")]){
        var h = $scope.availHours[($scope.dayParser [i] + "Stop")].getHours();
        var m = $scope.availHours[($scope.dayParser [i] + "Stop")].getMinutes();
        var joiner = [h, m];
        $scope.availHours[($scope.dayParser [i] + "Stop")] = joiner.join(':')
      } else {$scope.availHours[($scope.dayParser [i] + "Stop")] = null};  
    }
  };
  
  // SAVES AVAILABILITY
  $scope.newSaveAvailHours = function(){
    $scope.availHours.employeeId = $scope.selectedIdNumber;
    var x = (rService.employeeAvailable.length);
    rService.employeeAvailable[x] = $scope.availHours;
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
      console.log("saved employeeAvailable is " , rService.employeeAvailable);
      console.log("saved userData is " , rService.masterUsers);
      console.log("saved currentEmployee is " , rService.employeeData);

  }; 

  });