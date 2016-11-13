angular.module('rosterRooster')
.controller('builder', function($scope,$stateParams, rService, availability, employers, employees, users, assigned, status){


  $scope.availability = availability;
  console.log('availability =', $scope.availability);
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.status = status;
  // console.log('status =', $scope.status);
  $scope.assigned = assigned;
    // console.log('assigned =', $scope.assigned);


  // ========== sets employee id number ==========
  $scope.employeeidNumber = 1;
  // ========== sets employer  number ==========
  $scope.employeridNumber = 1;

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
      var st = (dOtW)+"start";
      var sp = (dOtW)+"stop";
      
      console.log("AV = ",$scope.availability.length);
      
      for (var i = 0; i < $scope.employees.length; i++) {
        var tempObj = {};
        if($scope.employees[i].employerid == $scope.employeridNumber){
          tempObj.employerid = $scope.employeridNumber;
          tempObj.employeeid = $scope.employees[i].id;
          tempObj.firstname = $scope.employees[i].firstname;
          tempObj.lastname = $scope.employees[i].lastname;
          tempObj.weeklymax = $scope.employees[i].weeklymax;
          tempObj.weeklymin = $scope.employees[i].weeklymin;
          for (var j = 0; j < $scope.availability.length; j++) {
            
            if ($scope.availability[j].employeeid == tempObj.employeeid) {
              tempObj.start = $scope.availability[j][st];
              tempObj.stop = $scope.availability[j][sp];
              tempObj.stWord = st;
              tempObj.spWord = sp;
              console.log(tempObj);
              $scope.employeeList.push(tempObj);
            }
          }
          
        }
      }
    };
$scope.makeEmployeeList();
console.log("$scope.employeeList = ", $scope.employeeList);

    
$scope.employeeEditorToggler = false;

$scope.activeEeditor = function(){
    $scope.employeeEditorToggler = true;
  
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
    console.log($scope.employeeList[$scope.idx].start);
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
  $scope.barList[c-1].firstname = $scope.employeeList[ix].firstname;
  $scope.barList[c-1].lastname = $scope.employeeList[ix].lastname;
  $scope.barList[c-1].employeeid = $scope.employeeList[ix].employeeid;
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

// SAVE THE DAY

$scope.saveDay = function(){
  var m = ($scope.theDay.getMonth()+1);
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getFullYear().toString().substr(2,2)
  var theDate = (m + "-" + d + "-" + y);

  var ss = $scope.status.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;
  var postList = [];
  
  console.log("employeeList = ",$scope.employeeList.length);
  for (var t = 0; t < $scope.barList.length; t++) {
      var aH = $scope.assigned.length;
    for (var u = 0; u < $scope.employeeList.length; u++) {
    if ($scope.employeeList[u].employeeid == $scope.barList[t].employeeid){
      postList.push($scope.employeeList[u])
    }
    }
  }
  
  for (var i = 0; i < postList.length; i++) {
    for (var k = 0; k < $scope.assigned.length; k++) {
      exists = false;
      if(($scope.assigned[k].employeeid == postList[i].employeeid) &&
      ($scope.assigned[k].date == theDate)){
        $scope.assigned[k].start = postList[i].start;
        $scope.assigned[k].stop = postList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = (aH + i);
      tempObj.employeeid = postList[i].employeeid;
      tempObj.employerid = $scope.employeridNumber;
      tempObj.date = theDate;
      tempObj.start = postList[i].start;
      tempObj.stop = postList[i].stop;
      rService.assignedHoursPost(tempObj);
      console.log("assigned",tempObj);
    }
  };
    var saveTrigger = false;
  
    for (var j = 0; j < $scope.status.length; j++) {
      if(($scope.status[j].employerid ==  $scope.employeridNumber)
      &&($scope.status[j].date == theDate)){
        $scope.status[j].edited = true;
        $scope.status[j].published = false;
      }else{ saveTrigger = true;}  
    }
    if(saveTrigger  == true){
      tempObjB.id = (ss + 1);
      tempObjB.employerid = $scope.employeridNumber;
      tempObjB.date = theDate;
      tempObjB.published = false;
      tempObjB.edited = true;
      rService.scheduleStatusPost(tempObjB);
      
      saveTrigger = false;
    }console.log("status",tempObjB);

    // console.log(' scheduleStatus upon publish =',$scope.status);
    // console.log(' assignedHours upon publish =',$scope.assigned);
};

// PUBLISH THE DAY

$scope.publishDay = function(){
  var m = ($scope.theDay.getMonth()+1);
  var d = $scope.theDay.getDate();
  var y = $scope.theDay.getFullYear().toString().substr(2,2)
  var postList = [];
  var theDate = (m + "-" + d + "-" + y);
  
  var ss = $scope.status.length;
  var tempObj = {};
  var tempObjB = {}
  var exists = false;

  for (var i = 0; i < postList.length; i++) {
    var aH = $scope.assigned.length;
    for (var k = 0; k < $scope.assigned.length; k++) {
      exists = false;
      if(($scope.assigned[k].employeeid == postList[i].employeeid) &&
      ($scope.assigned[k].date == theDate)){
        $scope.assigned[k].start = postList[i].start;
        $scope.assigned[k].stop = postList[i].stop;
        exists = true;
      }
    }
    if (exists == false){
      tempObj.id = (aH + 1);
      tempObj.employeeid = postList[i].employeeid;
      tempObj.employerid = $scope.employeridNumber;
      tempObj.date = theDate
      tempObj.start = postList[i].start;
      tempObj.stop = postList[i].stop;
    
      rService.assignedHoursPost(tempObj);
      
    }
  };console.log("assigned",tempObj);
        publishTrigger = false;
  
    for (var j = 0; j < $scope.status.length; j++) {
      if(($scope.status[j].employerid ==  $scope.employeridNumber)
      &&($scope.status[j].date == theDate)){
        $scope.status[j].edited = true;
        $scope.status[j].published = true;
      }else{
        publishTrigger = true;
      }
    }
    
    if(publishTrigger == true){
    tempObjB.id = (ss +1);
    tempObjB.employerid = $scope.employeridNumber;
    tempObjB.date = theDate;
    tempObjB.published = true;
    tempObjB.edited = true;
    $scope.status[j] = tempObjB;
    console.log("status",tempObjB);
    rService.scheduleStatusPost(tempObjB);
    publishTrigger = false;
  }
    
    // console.log(' scheduleStatus upon publish =',$scope.status);
    // console.log(' assignedHours upon publish =',$scope.assigned);
  };


});