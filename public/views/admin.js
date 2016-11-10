angular.module('rosterRooster').controller('admin', function($scope,$stateParams,rService){
  

  
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
      for (var i = 0; i < rService.employeeData.length; i++) {
        if(rService.employeeData[i].id == $scope.selectedIdNumber)
        $scope.currentEmployee = rService.employeeData[i];
      }
      // console.log($scope.currentEmployee);
    };
        $scope.getCurrentEmployee();
    
  // SETS USER DATA  
    $scope.getUserData = function(){
      for (var i = 0; i < rService.masterUsers.length; i++) {
        if(rService.masterUsers[i].employeeId == $scope.selectedIdNumber)
        $scope.userData = rService.masterUsers[i];
      }
    };
    
  // SETS AVAILABLE HOURS
    $scope.getAvailHours = function(){
      $scope.eAvailEditor = {};
      for (var j = 0; j < rService.employeeAvailable.length; j++) {
        if(rService.employeeAvailable[j].employeeId == $scope.selectedIdNumber){
          $scope.eAvailEditor = rService.employeeAvailable[j]}
          
          for (var k = 0; k < $scope.dayParser.length; k++) {
            if($scope.eAvailEditor[($scope.dayParser[k]+'Start')]){
            var st = $scope.eAvailEditor[($scope.dayParser[k]+'Start')].split(":");
            $scope.availHours[($scope.dayParser[k]+'Start')] = new Date(2000, 00, 1, st[0], st[1]);
          }else{$scope.availHours[($scope.dayParser[k]+'Start')] = null};
            if($scope.eAvailEditor[($scope.dayParser[k]+'Stop')]){
            var sp = $scope.eAvailEditor[($scope.dayParser[k]+'Stop')].split(":");
            $scope.availHours[($scope.dayParser[k]+'Stop')] = new Date(2000, 00, 1, sp[0], sp[1]);
          }else{$scope.availHours[($scope.dayParser[k]+'Stop')] = null};
          }
      }
    };
    
    //MANAGES OVERTIME CLICK
    
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
    for (var l = 0; l < rService.employeeData.length; l++) {
      if(rService.employeeData[l].employeeId == $scope.selectedIdNumber){
        rService.employeeData[l] = $scope.currentEmployee;
      }
    }
    };
    
    // SAVES USERNAME AND PASSWORD INFORMATION

    $scope.saveMasterUsers = function(){
    for (var m = 0; m < rService.masterUsers.length; m++) {
      if(rService.masterUsers[m].employeeId == $scope.selectedIdNumber){
        $scope.userData.id = rService.masterUsers[m].id;
        rService.masterUsers[m] = $scope.userData;
      }
    }
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

    // SAVES EMPLOYEE AVAIL

    $scope.saveAvailHours = function(){
      $scope.availHours.employeeId = $scope.selectedIdNumber;
      
      for (var i = 0; i < rService.employeeAvailable.length; i++) {
        if(rService.employeeAvailable[i].employeeId = $scope.selectedIdNumber){
          $scope.availHours.id = rService.employeeAvailable[i].id;
          rService.employeeAvailable[i] = $scope.availHours;
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
        console.log("saved employeeAvailable is " , rService.employeeAvailable);
        console.log("saved userData is " , rService.masterUsers);
        console.log("saved currentEmployee is " , rService.employeeData);
        
    }; 
    
  });