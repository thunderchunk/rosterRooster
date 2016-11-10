angular.module('rosterRooster').controller('builder', function($scope,$stateParams,rService){

  // ========== sets employee id number ==========
  $scope.employeeIdNumber = 1;
  // ========== sets employer  number ==========
  $scope.employerIdNumber = 1;

// ========== MASTER VARIABLES ==========
  
// GET DAY
  $scope.selectedMonth = rService.monthHolder;
  $scope.selectedYear = rService.yearHolder;
  $scope.selectedDay = $stateParams.id;
  $scope.theDay = new Date($scope.selectedYear, $scope.selectedMonth, $scope.selectedDay);
// DAY OF THE WEEK 
  $scope.theDoW = $scope.theDay.getDay();
// MASTER COLUMN VALUE
  $scope.activeColumn = 0;
// MASTER LIST OF EMPLOYEES with PERTINANT DATA
  $scope.employeeList = [];
// MASTER LIST OF BAR BUILDER INFORMATION
    $scope.barList = [];
// PICKED EMPLOYEE
  $scope.ePick;//current employee for bottom display
  $scope.idx;//index of epick on employeeList

  
// ========== REFERENCE VARIABLES ==========
  $scope.dayList = ['sd', 'm', 'tu', 'w', 'th', 'f', 'st'];
  
  $scope.timeArray = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
                    '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'];
                    
  //color LIST
  
  $scope.colorList = ['#738A05', '#259286', '#2176C7', '#595AB7', '#D11C24', '#BD3613', '#A57706' ];
                    

  
// =========================================================================
// ========================== EMPLOYEE SCHED. BUILDER ========================
// =========================================================================
  
  $scope.makeEmployeeList = function(){
    var dOtW = $scope.dayList[$scope.theDoW];
    var st = (dOtW)+"Start";
    var sp = (dOtW)+"Stop";
    
    for (var i = 0; i < rService.employeeData.length; i++) {
      var tempObj = {};
      if(rService.employeeData[i].employerId == $scope.employerIdNumber){
        tempObj.employerId = $scope.employerIdNumber;
        tempObj.employeeId = rService.employeeData[i].id;
        tempObj.firstName = rService.employeeData[i].firstName;
        tempObj.lastName = rService.employeeData[i].lastName;
        tempObj.weeklyMax = rService.employeeData[i].weeklyMax;
        tempObj.weeklyMin = rService.employeeData[i].weeklyMin;
        for (var j = 0; j < rService.employeeAvailable.length; j++) {
          if (rService.employeeAvailable[j].employeeId == tempObj.employeeId) {
            tempObj.start = rService.employeeAvailable[j][st];
            tempObj.stop = rService.employeeAvailable[j][sp];
            tempObj.stWord = st;
            tempObj.spWord = sp;
          }
        }
        $scope.employeeList.push(tempObj);
      }
    }
  };
$scope.makeEmployeeList();
    
$scope.employeeEditorToggler = false;

$scope.activeEeditor = function(){
    $scope.employeeEditorToggler = true;
  console.log($scope.employeeList);
};

// =========================================================================
// ========================== DAY SCHEDULER ================================
// =========================================================================
  
  //builds ID's For barHider
  
  $scope.idBuilder = function(){
    var c = $scope.activeColumn;
    $scope.barList[c-1]["id"] = ("column" + c);
    $scope.barList[c-1]["barId"] = ("bar" + c);
    $scope.barList[c-1]["s1id"] = ("shadowA" + c);
    $scope.barList[c-1]["s2id"] = ("shadowB" + c);
  }
  //color assignment
  $scope.colorAssign = function(){
    var c = $scope.activeColumn;
    if ($scope.colorList[c-1]) {
    $scope.barList[c-1].barColor = $scope.colorList[c-1];
  }else{
    $scope.barList[c-1].barColor = $scope.colorList[((c-1)-($scope.colorList.length))]
  }
  };
  

  //shows bars and shadows
  $scope.barHider = function(){
  var c = $scope.activeColumn;
  $scope.barList[c-1]["barShow"] = true;
  $scope.barList[c-1]["shadowShow"] = true;
  if(c > 1){
      $scope.barList[c-2].shadowShow = false;
      console.log($scope.barList[c-2].shadowShow);
    }
  };

  //parses time data into height and starting points
  $scope.barBuilder = function(){
  var splitter = $scope.employeeList[$scope.idx].start.split(':');
  var splitterB = $scope.employeeList[$scope.idx].stop.split(':');
  
  // builds start
  var start = (((splitter[0]*1) * 36) + 55) + "px";
  var c = $scope.activeColumn;
  $scope.barList[c-1]["barStart"] = start;
  
  // builds height
  var height = (((splitterB[0]*1)-(splitter[0]*1))*36) + "px";
  $scope.barList[c-1]["barHeight"] = height;
  
  // assigns color
  if ($scope.colorList[c-1]) {
  $scope.barList[c-1].barColor = $scope.colorList[c-1];
  }else{
  $scope.barList[c-1].barColor = $scope.colorList[((c-1)-($scope.colorList.length))]
  }
  var color = $scope.barList[c-1].barColor;
  // callback function
  $scope.barLoader(start,height,color);
  };
  
  
$scope.barLoader = function(start,height,color){
  var c = $scope.activeColumn;
  // console.log(start,height);
  $('#'+$scope.barList[c-1]['barId']).css({top:start,height:height, 'background-color':color});
  console.log('#'+$scope.barList[c-1]['barId']);
}

//Shadow Builder / Loader

$scope.shadowBuilder = function(){
  var c = $scope.activeColumn;
  var splitter = $scope.employeeList[$scope.idx].start.split(':');
  var splitterB = $scope.employeeList[$scope.idx].stop.split(':');
  
  var s1height = (((splitter[0]*1)*36)+'px');
  $scope.barList[c-1]["s1height"] = s1height;
  
  var s2start = ((((splitterB[0]*1)*36)+55)+'px');
  $scope.barList[c-1]["s2start"] = s2start;
  
  var s2height = ((24-(splitterB[0]*1))*36)+'px';
  $scope.barList[c-1]["s2height"] = s2height;
  
  $scope.shadowLoader(s1height, s2start, s2height);
};

$scope.shadowLoader = function(s1height, s2start, s2height){
  var c = $scope.activeColumn;
  $('#'+$scope.barList[c-1]["s1id"]).css('height', s1height);
  $('#'+$scope.barList[c-1]["s2id"]).css({height:s2height, top:s2start});
}


//populates first and last name to bar / and start stop information
$scope.barText = function(){
  var c = $scope.activeColumn;
  var ix = $scope.idx;
  $scope.barList[c-1].firstName = $scope.employeeList[ix].firstName;
  $scope.barList[c-1].lastName = $scope.employeeList[ix].lastName;
  var startParser = $scope.employeeList[ix].start.split(":");
  var stopParser = $scope.employeeList[ix].stop.split(":");
  if((startParser[0]*1) < 12){  
    $scope.barList[c-1].start = (startParser[0]+"AM")
  }else if((startParser[0]*1) == 0){
    $scope.barList[c-1].start = (12+"AM")
  }else{
    $scope.barList[c-1].start = ((startParser[0]*1)-12)+"PM"
  };
  if((stopParser[0]*1) < 12){  
    $scope.barList[c-1].stop = (stopParser[0]+"AM")
  }else if((stopParser[0]*1) == 0){
    $scope.barList[c-1].stop = (12+"AM")
  }else{
    $scope.barList[c-1].stop = ((stopParser[0]*1)-12)+"PM"
  };
};

// TIME EDITOR

$scope.timeHolder = {};

$scope.startStopTime = function(){
  $scope.editToggler = true;
  var c = $scope.activeColumn;
  var tS = $scope.employeeList[$scope.idx].start.split(':');
  var tSDate = new Date(2000, 00, 1, tS[0], tS[1]);
    $scope.timeHolder.start = tSDate;
  var tSp = $scope.employeeList[$scope.idx].stop.split(':');
  var tSpDate = new Date(2000, 00, 1, tSp[0], tSp[1]);
    $scope.timeHolder.stop = tSpDate;
    
};

//RETURNS RESULT TO A READABLE FORMAT

$scope.returnTime = function(){
  var c = $scope.activeColumn;
    var tS = $scope.timeHolder.start;
    var ha = tS.getHours();
    var ma = tS.getMinutes();
    var joinera = [ha, ma];
  $scope.employeeList[$scope.idx].start = joinera.join(':');
  $scope.barList[c-1].start = joinera.join(':');
    var tSp = $scope.timeHolder.stop;
    var hb = tSp.getHours();
    var mb = tSp.getMinutes();
    var joinerb = [hb, mb];
  $scope.employeeList[$scope.idx].stop = joinerb.join(':');
  $scope.barList[c-1].stop = joinerb.join(':');
  $scope.editToggler = false;
  $scope.barBuilder();
  $scope.barText();
  console.log("barList @ timeEditor = ", $scope.barList);
  console.log("emloyeeList @ timeEditor = ", $scope.employeeList);
}
// CANCELS TIME EDITOR

$scope.cancelStSp = function(){
  $scope.editToggler = false;
};

$scope.boxToggler = false;
$scope.editToggler = false;

// Returns employee id;
$scope.employeePick = function($index){
  $scope.idx = $index;
  // sets the active column, bro
  $scope.activeColumn+=1;
  //pushes empty object to barList
  tempObj = {};
  $scope.barList.push(tempObj);
  // calls all the builder functions
  $scope.ePick = $scope.employeeList[$index];
  $scope.employeeEditorToggler = false;
  $scope.boxToggler = true;
  $scope.idBuilder();
  $scope.colorAssign();
  $scope.barHider();
  $scope.barBuilder();
  $scope.barText();
  $scope.shadowBuilder();
  console.log("ePick = ", $scope.ePick);
  console.log("active column = ",$scope.activeColumn);
  console.log("barList = ", $scope.barList);
};
// =========================================================================
// ========================== SAVE, CLOSE, CANCEL ========+=================
// =========================================================================

$scope.saveDay = function(){
  var m = $scope.theDay.getMonth();
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getYear();
  var theDate = (m + "-" + d + "-" + y);
  var aH = rService.assignedHours.length;
  var ss = rService.scheduleStatus.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;
  
  for (var i = 0; i < $scope.employeeList.length; i++) {
    for (var k = 0; k < rService.assignedHours.length; k++) {
      exists = false;
      if((rService.assignedHours[k].employeeId == $scope.employeeList[i].employeeId) &&
      (rService.assignedHours[k].date == theDate)){
        rService.assignedHours[k].start = $scope.employeeList[i].start;
        rService.assignedHours[k].stop = $scope.employeeList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = aH;
      tempObj.employeeId = $scope.employeeList[i].employeeId;
      tempObj.employerId = $scope.employerIdNumber;
      tempObj.date = theDate
      tempObj.start = $scope.employeeList[i].start;
      tempObj.stop = $scope.employeeList[i].stop;
      rService.assignedHours.push(tempObj);
      
    }
  };
    for (var j = 0; j < rService.scheduleStatus.length; j++) {
      if((rService.scheduleStatus[j].employerId ==  $scope.employerIdNumber)
      &&(rService.scheduleStatus[j].date == theDate)){
        rService.scheduleStatus[j].edited = true;
        rService.scheduleStatus[j].published = false;
      }else{
        tempObjB.id = ss;
        tempObjB.employerId = $scope.employerIdNumber;
        tempObjB.date = theDate;
        tempObjB.published = false;
        tempObjB.edited = true;
        rService.scheduleStatus[j] = tempObjB;
      }
    }
    console.log(' scheduleStatus upon publish =',rService.scheduleStatus);
    console.log(' assignedHours upon publish =',rService.assignedHours);
};

$scope.publishDay = function(){
  var m = $scope.theDay.getMonth();
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getYear();
  var theDate = (m + "-" + d + "-" + y);
  var aH = rService.assignedHours.length;
  var ss = rService.scheduleStatus.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;

  for (var i = 0; i < $scope.employeeList.length; i++) {
    for (var k = 0; k < rService.assignedHours.length; k++) {
      exists = false;
      if((rService.assignedHours[k].employeeId == $scope.employeeList[i].employeeId) &&
      (rService.assignedHours[k].date == theDate)){
        rService.assignedHours[k].start = $scope.employeeList[i].start;
        rService.assignedHours[k].stop = $scope.employeeList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = aH;
      tempObj.employeeId = $scope.employeeList[i].employeeId;
      tempObj.employerId = $scope.employerIdNumber;
      tempObj.date = theDate
      tempObj.start = $scope.employeeList[i].start;
      tempObj.stop = $scope.employeeList[i].stop;
      rService.assignedHours.push(tempObj);
      
    }
  };
    for (var j = 0; j < rService.scheduleStatus.length; j++) {
      if((rService.scheduleStatus[j].employerId ==  $scope.employerIdNumber)
      &&(rService.scheduleStatus[j].date == theDate)){
        rService.scheduleStatus[j].edited = true;
        rService.scheduleStatus[j].published = true;
      }else{
        tempObjB.id = ss;
        tempObjB.employerId = $scope.employerIdNumber;
        tempObjB.date = theDate;
        tempObjB.published = true;
        tempObjB.edited = true;
        rService.scheduleStatus[j] = tempObjB;
      }
    }
    console.log(' scheduleStatus upon publish =',rService.scheduleStatus);
    console.log(' assignedHours upon publish =',rService.assignedHours);
  };


});