angular.module('rosterRooster').controller('employee', function($scope,$window,rService){
  
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
  
  
  // ==========  BUILDS MAIN PAGE LIST ==========
  
  $scope.employeeLister = function(){
    var tempList = [];
    // console.log("employeeData is " , rService.employeeData);
    for (var i = 0; i < rService.employeeData.length; i++) {
        if ($scope.employerIdNumber == rService.employeeData[i].employerId){
        tempList.push(rService.employeeData[i]);
        $scope.employeeList.push(rService.employeeData[i]);
      }
    }
    // console.log("employeeLister availHours is " , $scope.availHours);
    // console.log("employeeLister userData is " , $scope.userData);
    // console.log("employeeLister currentEmployee is " , $scope.currentEmployee);
    return tempList;
  };
  // ==========  ENDS MAIN PAGE LIST ==========
  
  
    // ========== TOGGLES FOR EDITOR MODAL ==========
    
    $scope.employeeEditorToggler = false;
    // toggles overtime button
    $scope.otChecky = false;
    $scope.otCheckn = false;
    // day parser
    $scope.dayParser = ['m', 'tu', 'w', 'th', 'f', 'st', 'sd'];
    
    // ========== modal generator builder functions ==========
  
    // gets username password information
    $scope.getuserData = function(){
      for (var i = 0; i < rService.masterUsers.length; i++) {
        // gets user information
        if (rService.masterUsers[i].employeeId == $scope.selectedIdNumber){
          $scope.userData = rService.masterUsers[i];
        }
      }
    };
  
    // gets available hours

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

// sets overtime button

$scope.overTimeBttn = function(){
  if ($scope.availHours.overtime = true){
  $scope.otChecky = true;}
  else{
    $scope.otCheckn = true;
  }
};

// ========== modal generator  function  ==========

$scope.employeeEditor = function($index){
  $scope.currentEmployee = $scope.employeeList[$index];
  // reset current id number\/
  $scope.selectedIdNumber = $scope.currentEmployee.id;
  // reset current id number/\

  $scope.getuserData();
  $scope.getAvailHours();
  $scope.overTimeBttn();

  $scope.employeeEditorToggler = true;
  $scope.employeeCreatorToggler = false;
  
  console.log("AvailHours is " , $scope.availHours);
  console.log("userData is " , $scope.userData);
  console.log("currentEmployee is " , $scope.currentEmployee);
};

// ========== end modal generator function ==========

// cancel button
$scope.closeEmployeeEditor = function(){
  $scope.employeeEditorToggler = false;
};

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

// ======================== SAVER FUNCTIONS ============================

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
  var varifier = false;
  var indexHolder;
  for (var i = 0; i < rService.employeeAvailable.length; i++) {
    if(rService.employeeAvailable[i].employeeId = $scope.selectedIdNumber){
      indexHolder = i;
      varifier = true;
    }
  };
  if (varifier = true){
    rService.employeeAvailable[indexHolder] = $scope.availHours;
  }else{
    var eAl = (rService.employeeAvailable.length - 1);
    rService.employeeAvailable[eAl] = $service.availHours
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
    
  $scope.employeeEditorToggler = false;
  $scope.employeeCreatorToggler = false;
}; 

// ========== MAKES A NEW EMPLOYEE ==========

// ALL TOGGLERS IN NEW EMPLOYEE
$scope.employeeCreatorToggler = false;

//toggles day views
$scope.allYes = false;
$scope.weekYes = false;
$scope.showRestDays = false;

//cancel in toolbar
$scope.cancelNewEmp = function(){
  $scope.employeeCreatorToggler = false;
};

// gets next available employee ID
$scope.nextId = function(){
  var tempList = [];
  for (var i = 0; i < rService.employeeData.length; i++) {
    tempList.push(rService.employeeData[i].id)
  }
  var x = (tempList.pop() + 1);
  return x;
};

//opens new employee modal / resets current employee data

$scope.newGuy = function(){
  $scope.selectedIdNumber = $scope.nextId();
  
  $scope.currentEmployee = {};
  $scope.currentEmployee.employerId = $scope.employerIdNumber;
  $scope.currentEmployee.id = $scope.selectedIdNumber;
  
  $scope.availHours = {};
  $scope.availHours.employeeId = $scope.selectedIdNumber;
  
  $scope.userData = {};
  $scope.userData.employerId = $scope.employerIdNumber;
  $scope.userData.employeeId = $scope.selectedIdNumber;
  
  $scope.employeeCreatorToggler = true;
  $scope.employeeEditorToggler = false;
  
  // console.log($scope.currentEmployee);
  
  console.log("washed availHours is " , $scope.availHours);
  console.log("washed userData is " , $scope.userData);
  console.log("washed currentEmployee is " , $scope.currentEmployee);
};

// shows rest of days when selected
$scope.showRest = function(){
  $scope.showRestDays = true;
};

// shows all days when selected

$scope.allDays = function(){
  for (var i = 1; i < $scope.dayParser.length; i++) {
    $scope.availHours[($scope.dayParser[i]+'Start')] = $scope.availHours.mStart;
    $scope.availHours[($scope.dayParser[i]+'Stop')] = $scope.availHours.mStop;
  }
  $scope.allYes = true;
  $scope.weekYes = false;
  $scope.showRestDays = true;
};

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

// ========== NEW SAVE AND CLOSE FUNCTION BUILDERS ==========

// SAVES ROOT EMPLOYEE  INFORMATION

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
    
  $scope.employeeEditorToggler = false;
  $scope.employeeCreatorToggler = false;
  $scope.employeeLister();
}; 





  });