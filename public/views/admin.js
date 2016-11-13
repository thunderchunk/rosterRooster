angular.module('rosterRooster')
.controller('admin', function($scope,$stateParams,rService,availability,employers,employees,users){
  
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
    
  });