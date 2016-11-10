angular.module('rosterRooster').controller('builder', function($scope,$stateParams,rService){
// ========== sets employee id number ==========
$scope.employeeIdNumber = 1;
// ========== sets employer  number ==========
$scope.employerIdNumber = 1;

// ========== MASTER VARIABLES ==========
$scope.selectedMonth = rService.monthHolder;
$scope.selectedYear = rService.yearHolder;
$scope.selectedDay = $stateParams.id;
$scope.theDay = new Date($scope.selectedYear, $scope.selectedMonth, $scope.selectedDay);
$scope.theDoW = $scope.theDay.getDay();

// console.log("month = ", $scope.selectedMonth, " / day = ", $scope.selectedDay, " / year = ", $scope.selectedYear);
$scope.currentEmployee = {};
$scope.availHours = {};
$scope.employeeList = [];

// Active Column Variables 
$scope.activeColumn = 0;

// =========================================================================
// ========================== DAY SCHEDULER ================================
// =========================================================================

// ========== MAKES BUILDING BLOCKS FOR GRID ==========

$scope.timeArray = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
                    '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'];



  // ========== ASSIGNS INITIAL EMPLOYEE DATA ==========

$scope.getCurrentEmployee = function(){
  for (var i = 0; i < rService.employeeData.length; i++) {
    if(rService.employeeData[i].id == $scope.employeeIdNumber)
    $scope.currentEmployee = rService.employeeData[i];
  }
  // console.log("initial Current employee = ",$scope.currentEmployee);


};
$scope.getCurrentEmployee();

// ========== GETS EMPLOYEE AVAILABILITY ==========

$scope.getAvailability = function(){
for (var h = 0; h < rService.employeeAvailable.length; h++) {
  if(rService.employeeAvailable[h].employeeId == $scope.currentEmployee.id){
    $scope.availHours = rService.employeeAvailable[h];
  }
}
};
$scope.getAvailability();
// console.log("initial Current availability = ",$scope.availHours);

// ========== ACTIVATES EMPLOYEE PICKER ==========

//Lists employees
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

// Toggler value
$scope.employeeEditorToggler = false;
// ========================== OPEN EMPLOYEE EDITOR ==================================
// ==========================  OTHER EMPLOYEE BUTTON ==========================

$scope.activeEeditor = function(){
  $scope.employeeEditorToggler = true;
};







// =========================================================================
// ========================== BAR BUILDER ==================================
// =========================================================================


// KEY OBJECTS
$scope.shadowHeight = {}
$scope.shadowHeightB = {}
$scope.barParams = {};
$scope.barEmployee = {};
$scope.shadowShow = {
  'c1': false,
};
$scope.barShow = {
  'b1': false,
};
$scope.barHeight = {};



$scope.dayList = ['sd', 'm', 'tu', 'w', 'th', 'f', 'st']

$scope.theDay =  $scope.dayList[$scope.theDoW];

$scope.xSt = ($scope.theDay + "Start");
$scope.xSp = ($scope.theDay + "Stop");

// SETS BAR NAMES
$scope.setBarNames = function(){  
  var fn = ("b" + $scope.activeColumn + "firstName");
  var ln = ('b' + $scope.activeColumn + 'lastName');
  $scope.barEmployee[fn] = $scope.currentEmployee.firstName;
  $scope.barEmployee[ln] = $scope.currentEmployee.lastName;
};

// CHANGES MILITARY TO STANDARD
$scope.hourParser = function(x){
    var splitter = x.split(':');
    if ((splitter[0]*1) < 12) {
      return (splitter[0] + " AM");
  }else{
    return (((splitter[0]*1) - 12) + " PM");
  }
};

// CREATES VARIABLES FOR THIS DAY'S START AND STOP TIME EDITOR

$scope.timeHolder = {};

$scope.startStopTime = function(){
  var tS = $scope.availHours[$scope.xSt].split(':');
  var tSDate = new Date(2000, 00, 1, tS[0], tS[1]);
    $scope.timeHolder.start = tSDate;
  var tSp = $scope.availHours[$scope.xSp].split(':');
  var tSpDate = new Date(2000, 00, 1, tSp[0], tSp[1]);
    $scope.timeHolder.stop = tSpDate;
};

//RETURNS RESULT TO A READABLE FORMAT

$scope.returnTime = function(){
    var tS = $scope.timeHolder.start;
    var ha = tS.getHours();
    var ma = tS.getMinutes();
    var joinera = [ha, ma];
  $scope.availHours[$scope.xSt] = joinera.join(':');
    var tSp = $scope.timeHolder.stop;
    var hb = tSp.getHours();
    var mb = tSp.getMinutes();
    var joinerb = [hb, mb];
  $scope.availHours[$scope.xSp] = joinerb.join(':');
}


// PARSES TIME DATA
$scope.parseTimes = function(){
  console.log('$scope.availHours[$scope.xSt] = ', $scope.availHours[$scope.xSt]);
  $scope.parsedStart = $scope.hourParser($scope.availHours[$scope.xSt].toString());
  $scope.parsedStop = $scope.hourParser($scope.availHours[$scope.xSp].toString());
}


// APPLIES TIME DATA TO BAR

$scope.getInitialAvailibility = function(){
  $scope.parseTimes();
  $scope.bSt = "bSt" + $scope.activeColumn;
  $scope.bSp = "bSp" + $scope.activeColumn;
   $scope.barParams[$scope.bSt] = $scope.parsedStart;
   $scope.barParams[$scope.bSp] = $scope.parsedStop;
};

// HEIGHT MULTLIPLICATION

$scope.heightMaker = function(x){
  return ((x * 36) + "px");
}

// SETS SHADOW BAR 1 HEIGHT

$scope.shadowMaker = function(){
  var splitter = $scope.availHours[$scope.xSt].split(':');
  var z = (splitter[0]*1);
  var b = ("b" + $scope.activeColumn);
  $scope.shadowHeight[b] = $scope.heightMaker(z);
};

$scope.getShadowHeight = function(){
  var b = ("b" + $scope.activeColumn);
  return $scope.shadowHeight[b];
};

// SETS SHADOW BAR 2 HEIGHT

$scope.shadowMakerB = function(){
  var splitter = $scope.availHours[$scope.xSp].split(':');
  var z = (splitter[0]*1);
  var y = (z * 36) + 55;
  var sPoint = (y + "px")
  var heightPx = (24 - z);
  var sT = ("start" + $scope.activeColumn);
  var hT = ("height" + $scope.activeColumn);
  $scope.shadowHeightB[sT] = sPoint;
  $scope.shadowHeightB[hT] = $scope.heightMaker(heightPx);
  // console.log("shadowHeightB", $scope.shadowHeightB);
};

$scope.getShadowBstart = function(){
  var sT = ("start" + $scope.activeColumn);
  return $scope.shadowHeightB[sT];
};

$scope.getShadowBsheight = function(){
  var hT = ("height" + $scope.activeColumn);
  return $scope.shadowHeightB[hT];
};
// SETS BAR HEIGHT

$scope.setBarHeight = function(){
  
  var splitter = $scope.availHours[$scope.xSt].split(':');
  var z = (splitter[0]*1);
  var y = (z * 36) + 55;
  var ypx = (y + "px")
  var barSvariable = ("bar" + ($scope.activeColumn) + "Start");
  $scope.barHeight[barSvariable] = ypx;
  
  var splitterB = $scope.availHours[$scope.xSp].split(':');
  var x = (splitterB[0]*1);

  var totes = (x - z);
  var v = (totes * 36)
  var vpx = (v + "px")
  var barSvariableB = ("bar" + ($scope.activeColumn) + "Height");
  $scope.barHeight[barSvariableB] = vpx;
};

$scope.getBarHeight = function(){
  var barSvariableB = ("bar" + ($scope.activeColumn) + "Height");
  return $scope.barHeight[barSvariableB];
};

$scope.getBarStart = function(){
  var barSvariable = ("bar" + ($scope.activeColumn) + "Start");
  return $scope.barHeight[barSvariable];
};
// $scope.gbh = function(sp){
//   console.log("sp = ",sp);
//   return $scope.barHeight[sp];
// };


// console.log('shadowheight = ', $scope.shadowHeight);


// ==========  RETURNS CHOSEN EMPLOYEE ==========
$scope.employeePick = function($index){
  
  // sets the active column, bro
  $scope.activeColumn+=1;
  
  console.log($scope.activeColumn);
  var pEmployee = $scope.employeeList[$index];
  $scope.currentEmployee = pEmployee;

  
  
  // builds bar
  $scope.getAvailability();
  $scope.getInitialAvailibility();
  $scope.setBarNames();
  $scope.shadowMaker();
  $scope.shadowMakerB();
  $scope.setBarHeight();
  
  var c = ("c" + $scope.activeColumn);
  $scope.shadowShow[c] = true;
  
  var b = ("b" + $scope.activeColumn);
  $scope.barShow[b] = true;
  
  $scope.employeeEditorToggler = false;
  console.log('submitTime $scope.barParams = ', $scope.barParams);
  console.log('submitTime $scope.barHeight = ', $scope.barHeight);
  console.log('submitTime $scope.barEmployee = ', $scope.barEmployee);
  console.log("submitTime theDay = " ,$scope.theDay);
};

// ==========  EDITS CHOSEN EMPLOYEE'S TIME ==========

$scope.editToggler = false;

// ACTIVATES EMPLOYEE TIME EDITOR
  
$scope.timeEditor =  function(){
    $scope.startStopTime();
    $scope.editToggler = true;
}

// SUBMITS AND CLOSES
$scope.submitTime = function(){
  $scope.returnTime();
  $scope.getInitialAvailibility();
  $scope.setBarHeight();
  $scope.editToggler = false;
  
}

// ==========  Cancel Button  ==========
$scope.cancelStSp = function(){
  $scope.editToggler = false;
}

// ==========  Save Button  ==========
// $scope.saveDay = function(){
//   //save  to rService.assignedHours
//   var nextId = rService.assignedHours.length;
//   var tempArr = []
//   var tempObj = {};
//   for (var i = 0; i < ($scope.barEmployee.length / 2); i++) {
//     tempObj.id = (rService.assignedHours.length)
//   }
  
  
  //get id
  // get employer id
  // get employeeId
  // get date
  // get start
  // get stop
  
// };

// ==========  Publish Button  ==========

$scope.publishDay = function(){
  
  
};


});
