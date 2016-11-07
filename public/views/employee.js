angular.module('rosterRooster').controller('employee', function($scope,$window,rService){

  // ========== sets employee id number ==========

  $scope.employeeIdNumber = 1;
  $scope.employerIdNumber = 1;

  // ========== fills out content of employee lists ==========
  
  // provides a variable for later use
$scope.employeeList = [];
//variable that holds employee object after it's selected
$scope.currentEmployee = {};////employeeData
//variable that holds employee login information after it's selected
$scope.employeeUserData = {}//masterUsers
//variable that holds availble hours per selected employee
$scope.employeeAvailable = {}//emoloyeeAvailable

//function that looks up employees and returns list
$scope.employeeLister = function(){
  var tempList = [];
  for (var i = 0; i < rService.employeeData.length; i++) {
    if ($scope.employerIdNumber == rService.employeeData[i].employerId){
      tempList.push(rService.employeeData[i]);
      $scope.employeeList.push(rService.employeeData[i]);
    }
  }
  return tempList;
};


  // ========== toggles editor modal ==========
$scope.employeeEditorToggler = false;
// toggles overtime button
$scope.otChecky = false;
$scope.otCheckn = false;

  // ========== modal generator function ==========
  
  
$scope.employeeEditor = function($index){
  $scope.employeeEditorToggler = true;
  $scope.employeeCreatorToggler = false;
  $scope.currentEmployee = $scope.employeeList[$index];
  for (var i = 0; i < rService.masterUsers.length; i++) {
    // gets user information
    if (rService.masterUsers[i].employeeId == $scope.currentEmployee.id){
      $scope.employeeUserData = rService.masterUsers[i];
    }else{
      $scope.employeeAvailable = {};
    }
  }
  // gets available hours
  for (var j = 0; j < rService.employeeAvailable.length; j++) {
    if(rService.employeeAvailable[j].employeeId == $scope.currentEmployee.id){
      $scope.employeeAvailable = rService.employeeAvailable[j];
        // monday
        
      if($scope.employeeAvailable.mStart){
        var mSt = $scope.employeeAvailable.mStart.split(":");
        var mStH = mSt[0];
        var mStM = mSt[1];
        $scope.employeeAvailable.mStart = new Date(2000, 00, 1, mStH, mStM);
      }
      if($scope.employeeAvailable.mStop){
        var mSp = $scope.employeeAvailable.mStop.split(":");
        var mSpH = mSp[0];
        var mSpM = mSp[1];
        $scope.employeeAvailable.mStop = new Date(2000, 00, 1, mSpH, mSpM);
      }
        // tuesday
      
      if($scope.employeeAvailable.tuStart){
        var tuSt = $scope.employeeAvailable.tuStart.split(":");
        var tuStH = tuSt[0];
        var tuStM = tuSt[1];
        $scope.employeeAvailable.tuStart = new Date(2000, 00, 1, tuStH, tuStM);
      }
      if($scope.employeeAvailable.tuStop){
        var tuSp = $scope.employeeAvailable.tuStop.split(":");
        var tuSpH = tuSp[0];
        var tuSpM = tuSp[1];
        $scope.employeeAvailable.tuStop = new Date(2000, 00, 1, tuSpH, tuSpM);
      }
        // wednesday
      
      if($scope.employeeAvailable.wStart){
        var wSt = $scope.employeeAvailable.wStart.split(":");
        var wStH = wSt[0];
        var wStM = wSt[1];
        $scope.employeeAvailable.wStart = new Date(2000, 00, 1, wStH, wStM);
      }
      if($scope.employeeAvailable.wStop){
        var wSp = $scope.employeeAvailable.wStop.split(":");
        var wSpH = wSp[0];
        var wSpM = wSp[1];
        $scope.employeeAvailable.wStop = new Date(2000, 00, 1, wSpH, wSpM);
      }
        // thursday
      
      if($scope.employeeAvailable.thStart){
        var thSt = $scope.employeeAvailable.thStart.split(":");
        var thStH = thSt[0];
        var thStM = thSt[1];
        $scope.employeeAvailable.thStart = new Date(2000, 00, 1, thStH, thStM);
      }
      if($scope.employeeAvailable.thStop){
        var thSp = $scope.employeeAvailable.thStop.split(":");
        var thSpH = thSp[0];
        var thSpM = thSp[1];
        $scope.employeeAvailable.thStop = new Date(2000, 00, 1, thSpH, mSpM);
      }
        // friday
      
      if($scope.employeeAvailable.fStart){
        var fSt = $scope.employeeAvailable.fStart.split(":");
        var fStH = fSt[0];
        var fStM = fSt[1];
        $scope.employeeAvailable.fStart = new Date(2000, 00, 1, fStH, mStM);
      }
      if($scope.employeeAvailable.fStop){
        var fSp = $scope.employeeAvailable.fStop.split(":");
        var fSpH = fSp[0];
        var fSpM = fSp[1];
        $scope.employeeAvailable.fStop = new Date(2000, 00, 1, fSpH, fSpM);
      }
        // saturday
      
      if($scope.employeeAvailable.stStart){
        var stSt = $scope.employeeAvailable.stStart.split(":");
        var stStH = stSt[0];
        var stStM = stSt[1];
        $scope.employeeAvailable.stStart = new Date(2000, 00, 1, stStH, mStM);
      }
      if($scope.employeeAvailable.stStop){
        var stSp = $scope.employeeAvailable.stStop.split(":");
        var stSpH = stSp[0];
        var stSpM = stSp[1];
        $scope.employeeAvailable.stStop = new Date(2000, 00, 1, stSpH, mSpM);
      }
        // sunday
      
      if($scope.employeeAvailable.sdStart){
        var sdSt = $scope.employeeAvailable.sdStart.split(":");
        var sdStH = sdSt[0];
        var sdStM = sdSt[1];
        $scope.employeeAvailable.sdStart = new Date(2000, 00, 1, sdStH, mStM);
      }
      if($scope.employeeAvailable.sdStop){
        var sdSp = $scope.employeeAvailable.sdStop.split(":");
        var sdSpH = sdSp[0];
        var sdSpM = sdSp[1];
        $scope.employeeAvailable.sdStop = new Date(2000, 00, 1, sdSpH, mSpM);
      }
    }else{
      $scope.employeeAvailable = {};
    }
  };
  
  // sets overtime button
  if ($scope.employeeAvailable.overtime = true){
    $scope.otChecky = true;}
    else{
      $scope.otCheckn = true;
    }
  
  
};
// end toggle function

// closes employee editor modal
$scope.closeEmployeeEditor = function(){
  $scope.employeeEditorToggler = false;
};

//manages overtime click

$scope.otYes = function(){
  $scope.otChecky = true;
  $scope.otCheckn = false;
  $scope.employeeAvailable.overtime = true;
};

$scope.otNo = function(){
  $scope.otChecky = false;
  $scope.otCheckn = true;
  $scope.employeeAvailable.overtime = false;
};



  // ========== Submits all inmput boxes in form to submitter and changes object in Service  ==========

$scope.saveAndClose = function(){
  
  var saveId = $scope.currentEmployee.id;
  
  $scope.currentEmployee = rService.employeeData[saveId];

  for (var i = 0; i < rService.masterUsers.length; i++) {
    if (rService.masterUsers[i].employeeId == saveId) {
      $scope.employeeUserData = rService.masterUsers[i]
    }
  };
  // monday
  if($scope.employeeAvailable.mStart){
    var mStH = $scope.employeeAvailable.mStart.getHours();
    var mStM = $scope.employeeAvailable.mStart.getMinutes();
    var mStJoiner = [mStH, mStM];
  $scope.employeeAvailable.mStart = mStJoiner.join(":")
  };
  if($scope.employeeAvailable.mStop){
    var mSpH = $scope.employeeAvailable.mStop.getHours();
    var mSpM = $scope.employeeAvailable.mStop.getMinutes();
    var mSpJoiner = [mSpH, mSpM];
  $scope.employeeAvailable.mStop = mSpJoiner.join(":")
  };
  // tuesday
  if($scope.employeeAvailable.tuStart){
    var tuStH = $scope.employeeAvailable.tuStart.getHours();
    var tuStM = $scope.employeeAvailable.tuStart.getMinutes();
    var tuStJoiner = [tuStH, tuStM];
  $scope.employeeAvailable.tuStart = tuStJoiner.join(":")
  };
  if($scope.employeeAvailable.tuStop){
    var tuSpH = $scope.employeeAvailable.tuStop.getHours();
    var tuSpM = $scope.employeeAvailable.tuStop.getMinutes();
    var tuSpJoiner = [tuSpH, tuSpM];
  $scope.employeeAvailable.tuStop = mSpJoiner.join(":")
  };
  // wednesday
  if($scope.employeeAvailable.wStart){
    var wStH = $scope.employeeAvailable.wStart.getHours();
    var wStM = $scope.employeeAvailable.wStart.getMinutes();
    var wStJoiner = [wStH, wStM];
  $scope.employeeAvailable.wStart = wStJoiner.join(":")
  };
  if($scope.employeeAvailable.wStop){
    var wSpH = $scope.employeeAvailable.wStop.getHours();
    var wSpM = $scope.employeeAvailable.wStop.getMinutes();
    var wSpJoiner = [wSpH, wSpM];
  $scope.employeeAvailable.wStop = mSpJoiner.join(":")
  };
  // thursday
  if($scope.employeeAvailable.thStart){
    var thStH = $scope.employeeAvailable.thStart.getHours();
    var thStM = $scope.employeeAvailable.thStart.getMinutes();
    var thStJoiner = [thStH, thStM];
  $scope.employeeAvailable.thStart = thStJoiner.join(":")
  };
  if($scope.employeeAvailable.thStop){
    var thSpH = $scope.employeeAvailable.thStop.getHours();
    var thSpM = $scope.employeeAvailable.thStop.getMinutes();
    var thSpJoiner = [thSpH, thSpM];
  $scope.employeeAvailable.thStop = mSpJoiner.join(":")
  };
  // friday
  if($scope.employeeAvailable.fStart){
    var fStH = $scope.employeeAvailable.fStart.getHours();
    var fStM = $scope.employeeAvailable.fStart.getMinutes();
    var fStJoiner = [fStH, fStM];
  $scope.employeeAvailable.fStart = fStJoiner.join(":")
  };
  if($scope.employeeAvailable.fStop){
    var fSpH = $scope.employeeAvailable.fStop.getHours();
    var fSpM = $scope.employeeAvailable.fStop.getMinutes();
    var fSpJoiner = [fSpH, fSpM];
  $scope.employeeAvailable.fStop = fSpJoiner.join(":")
  };
  // saturday
  if($scope.employeeAvailable.stStart){
    var stStH = $scope.employeeAvailable.stStart.getHours();
    var stStM = $scope.employeeAvailable.stStart.getMinutes();
    var stStJoiner = [stStH, stStM];
  $scope.employeeAvailable.stStart = stStJoiner.join(":")
  };
  if($scope.employeeAvailable.stStop){
    var stSpH = $scope.employeeAvailable.stStop.getHours();
    var stSpM = $scope.employeeAvailable.stStop.getMinutes();
    var stSpJoiner = [stSpH, stSpM];
  $scope.employeeAvailable.stStop = mSpJoiner.join(":")
  };
  // sunday
  if($scope.employeeAvailable.sdStart){
    var sdStH = $scope.employeeAvailable.sdStart.getHours();
    var sdStM = $scope.employeeAvailable.sdStart.getMinutes();
    var sdStJoiner = [sdStH, sdStM];
  $scope.employeeAvailable.sdStart = sdStJoiner.join(":")
  };
  if($scope.employeeAvailable.sdStop){
    var sdSpH = $scope.employeeAvailable.sdStop.getHours();
    var sdSpM = $scope.employeeAvailable.sdStop.getMinutes();
    var sdSpJoiner = [sdSpH, sdSpM];
  $scope.employeeAvailable.sdStop = mSpJoiner.join(":")
  };
  
  for (var j = 0; j < rService.employeeAvailable.length; j++) {
    if(rService.employeeAvailable[j].employeeId == saveId){
      rService.employeeAvailable[j] = $scope.employeeAvailable;
    }
  };
    console.log("employeeAvailable is " + $scope.employeeAvailable);
    console.log("employeeUserData is " + $scope.employeeUserData);
    console.log("currentEmployee is " + $scope.currentEmployee);
  $scope.employeeLister();
  $scope.employeeCreatorToggler = false;
  $scope.employeeEditorToggler = false;
};

// ========== Makes a new employee from scratch ==========
$scope.employeeCreatorToggler = false;

//cancel toolbar
$scope.cancelNewEmp = function(){
  $scope.employeeCreatorToggler = false;
};

// gets next employee ID
$scope.nextEmployeeId = function(){
  for (var i = 0; i < rService.employeeData.length; i++) {
    var tempList = [];
    tempList.push(rService.employeeData[i].id);
    var nextId = (tempList.pop() + 1);
    return nextId;
  }
};
//assignes New id to variable
$scope.newId = $scope.nextEmployeeId();

//opens new employee modal / resets current employee data

$scope.newGuy = function(){
  $scope.nextEmployeeId();
  $scope.currentEmployee = {};
  $scope.currentEmployee.employerId = $scope.employerIdNumber;
  
  $scope.employeeAvailable = {};
  $scope.employeeAvailable.employerId = $scope.employerIdNumber;
  
  $scope.employeeUserData = {};
  $scope.employeeUserData.employerId = $scope.employerIdNumber;
  
  $scope.employeeCreatorToggler = true;
  $scope.employeeEditorToggler = false;
};

// apply to every day

$scope.allYes = false;
$scope.weekYes = false;

$scope.showRestDays = false;

$scope.dayParser = ['tu', 'w', 'th', 'f', 'st', 'sd'];

$scope.showRest = function(){
  $scope.showRestDays = true;
}

$scope.allDays = function(){
  for (var i = 0; i < $scope.dayParser.length; i++) {
    $scope.employeeAvailable[($scope.dayParser[i]+'Start')] = $scope.employeeAvailable.mStart;
    $scope.employeeAvailable[($scope.dayParser[i]+'Stop')] = $scope.employeeAvailable.mStop;
  }
  $scope.allYes = true;
  $scope.weekYes = false;
  $scope.showRestDays = true;
};

$scope.weekdays = function(){
  for (var i = 0; i < ($scope.dayParser.length - 2); i++) {
    $scope.employeeAvailable[($scope.dayParser[i]+'Start')] = $scope.employeeAvailable.mStart;
    $scope.employeeAvailable[($scope.dayParser[i]+'Stop')] = $scope.employeeAvailable.mStop;
  }
  for (var i = 4; i < $scope.dayParser.length; i++) {
    $scope.employeeAvailable[($scope.dayParser[i]+'Start')] = null;
    $scope.employeeAvailable[($scope.dayParser[i]+'Stop')] = null;
  }
  $scope.weekYes = true;
  $scope.allYes = false;
  $scope.showRestDays = true;
};

// saves info to 3 key variables using newId and closes modal

$scope.newSaveAndClose = function(){
  
}



});
