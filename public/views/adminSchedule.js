angular.module('rosterRooster').controller('adminSchedule', function($scope,rService){

  // ========== sets employee id number ==========

  $scope.employeeIdNumber = 1;
  $scope.employerIdNumber = 1;
  
  
  // ========== fills out content of employee lists ==========
  
  // provides a variable for later use
$scope.employeeList = [];
//variable that holds employee object after it's selected
$scope.pickedEmployee = {};////employeeData
//variable that holds availble hours per selected employee
$scope.employeeAvailable = {}//emoloyeeAvailable

  
    // ========== gets userinfo from Employee Id NUMBER ==========
  $scope.getUserName = function(){
    for (var i = 0; i < rService.employeeData.length; i++) {
      if(rService.employeeData[i].id == $scope.employeeIdNumber){
        var userInfo = rService.employeeData[i];
      }
    }return userInfo;
  }
  $scope.userInfo = $scope.getUserName();

  // ========== sets initial date / creates variable to adjust display ==========

  $scope.currentDate = new Date();

  // ========== KEYSTONE VARIABLES, FROM WHICH ALL IS BUILT ==========


  $scope.displayMonth = $scope.currentDate.getMonth(); //10
  $scope.displayDate = $scope.currentDate.getDate(); //4
  $scope.displayYear = $scope.currentDate.getFullYear(); //2016

  // ========== builds parallel arrays for input into object builder ==========

$scope.calendarBuilder = function(month, day, year, empId){

  var dayBuilder = [];
  var monthBuilder = [];
  var yearBuilder = [];
  var textToggler = [];
  // get first and last days in the display month
  var firstDay = new Date(year, month, 1);
  var firstDayInt = firstDay.getDate();
  var lastDay = new Date(year, month + 1, 0);
  var lastDayInt = lastDay.getDate();
  // build an array with the days of the month
  for (var i = 1; i <= lastDayInt; i++) {
      dayBuilder.push(i);
      monthBuilder.push(month);
      yearBuilder.push(year);
      textToggler.push(false);
  }

  //Get previous month
  var pMonth;
  var pYear;
  if (month === 0) {
    pMonth = 11;
    pYear = (year - 1);
  }else{
    pMonth = (month - 1)
    pYear = year;
  };

  //get next month

  var nMonth;
  var nYear;
  if(month === 11){
    nMonth = 0
    nYear = (year + 1)
  }else{
    nMonth = (month + 1);
    nYear = year;
  };

  //get last day of previous month

  var pLastDay = new Date(pYear, nMonth + 1, 0);
  var pLastDayInit = pLastDay.getDate();

  // add to front of array with days from last month

  var firstDayOfWeek = firstDay.getDay();
  if (firstDayOfWeek !== 0) {
      for (var j = pLastDayInit; j > (pLastDayInit - firstDayOfWeek); j--) {
          dayBuilder.unshift(j);
          monthBuilder.unshift(pMonth);
          yearBuilder.unshift(pYear);
          textToggler.unshift(true);
      }
  };

  // fill out rest of array with days from next month
  for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
      dayBuilder.push(k);
      monthBuilder.push(nMonth);
      yearBuilder.push(nYear);
      textToggler.push(true)
  };

    // ========== makes the calendar object ==========
    var finalArray = [];

    for (var l = 0; l < dayBuilder.length; l++) {
        var x = new Object();
        x.day = dayBuilder[l];
        x.month = monthBuilder[l];
        x.year = yearBuilder[l];
        x.notCurrentMonth = textToggler[l];
        finalArray.push(x);
      
    };

    // ========== compares calendar object wi scheduleStatus ==========
    
    var scheduleStatusChecker = rService.scheduleStatus;
    
    for (var m = 0; m < finalArray.length; m++) {
      for (var n = 0; n < scheduleStatusChecker.length; n++) {
        var dateParser = scheduleStatusChecker[n].date.split("-");
        if($scope.employerIdNumber === scheduleStatusChecker[n].employerId){
          if ((scheduleStatusChecker[n].published === true) 
            && (("20" + dateParser[2]) == finalArray[m].year)
            && (dateParser[1] == finalArray[m].day)
            && ((dateParser[0]-1) == finalArray[m].month)) {
            finalArray[m].published = true;
          }
          if ((scheduleStatusChecker[n].edited === true)
          && (("20" + dateParser[2]) == finalArray[m].year)
          && (dateParser[1] == finalArray[m].day)
          && ((dateParser[0]-1) == finalArray[m].month)) 
          {
            finalArray[m].edited = true;
          }
        }
      }
      
    }

  
    // console.log(finalArray);
      
    return finalArray;

};

// ========== invoke the function, assigns object to variable ==========

$scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeIdNumber);


// ========== changes the currentDate variable to navigate months ==========

$scope.adjustMonth = function(x) {
    if ($scope.displayDate > 28)
        $scope.currentDate.setDay(27);
    if (($scope.displayMonth  === 0) && x === (-1)) {
        $scope.currentDate.setMonth(11);
        $scope.currentDate.setFullYear($scope.displayYear - 1);
    } else if (($scope.displayMonth === 11) && x === 1) {
        $scope.currentDate.setMonth(0);
        $scope.currentDate.setFullYear($scope.displayYear + 1);
    } else {
        $scope.currentDate.setMonth($scope.displayMonth + x);
    }

    $scope.displayMonth = $scope.currentDate.getMonth(); //10
    $scope.displayDate = $scope.currentDate.getDate(); //4
    $scope.displayYear = $scope.currentDate.getFullYear(); //2016

    $scope.calenderView = $scope.calendarBuilder($scope.displayMonth, $scope.displayDate, $scope.displayYear, $scope.employeeIdNumber);
    $scope.titleMonth = $scope.titleChanger();
};

// ========== changes the currentDate variable to navigate months ==========

$scope.titleChanger = function(){
  var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  var prettyDisplay = (monthNames[$scope.displayMonth] + " " + $scope.displayYear);
  return prettyDisplay;
};

//invoke the function
$scope.titleMonth = $scope.titleChanger();



// ========================== DAY SCHEDULER ================================
// =========================================================================


//toggles DAY SCHEDULER and feeds back day index to variable
$scope.dayFlipper = false;

$scope.daySelected ={};

$scope.dayEditorOn = function($index){
  $scope.daySelected = $scope.calenderView[$index];
  $scope.dayFlipper = true;
};

$scope.dayEditorOff = function(){
  $scope.dayFlipper = false;
  $scope.employeeEditorToggler = false;
};
  
//selects the hours for that day and builds the grid

$scope.timeArray = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
                    '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'];







// ==========  SUPER IMPORTANT VARIABLE ==========
// makes variable for chosen employee, default logged in user
$scope.pickedEmployee = $scope.userInfo;

// ==========  OTHER EMPLOYEE PICKER ==========

// Toggler value
$scope.employeeEditorToggler = false;

// ==========  OTHER EMPLOYEE BUTTON ==========
$scope.activeEeditor = function(){
  $scope.employeeEditorToggler = true;
}


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



// ==========  BAR BUILDER PARTS ==========

$scope.activeColumn = 1;

//toggles for bar builder

$scope.column1show = true;
$scope.column2show = false;
$scope.column3show = false;
$scope.column4show = false;
$scope.column5show = false;
$scope.column6show = false;
$scope.column7show = false;
$scope.column8show = false;
$scope.column9show = false;
$scope.column10show = false;
$scope.column11show = false;
$scope.column12show = false;

$scope.barShow1 = false;
$scope.barShow2 = false;
$scope.barShow3 = false;
$scope.barShow4 = false;
$scope.barShow5 = false;
$scope.barShow6 = false;
$scope.barShow7 = false;
$scope.barShow8 = false;
$scope.barShow9 = false;
$scope.barShow10 = false;
$scope.barShow11 = false;
$scope.barShow12 = false;

$scope.barEmployee1 = {};
$scope.barEmployee2 = {};
$scope.barEmployee3 = {};
$scope.barEmployee4 = {};
$scope.barEmployee5 = {};
$scope.barEmployee6 = {};
$scope.barEmployee7 = {};
$scope.barEmployee8 = {};
$scope.barEmployee9 = {};
$scope.barEmployee10 = {};
$scope.barEmployee11 = {};
$scope.barEmployee12 = {};

// ==========  BAR BUILDER FUNCTION  ==========


//function that returns selected employee, resets pickedEmployee

$scope.employeePick = function($index){
  var pEmployee = $scope.employeeList[$index];
  $scope.pickedEmployee = pEmployee;
  $scope.employeeEditorToggler = false;
  var dayList = ['sd', 'm', 'tu', 'w', 'th', 'f', 'st']
  
// gets availability for employee

  for (var h = 0; h < rService.employeeAvailable.length; h++) {
    if(rService.employeeAvailable[h].employeeId == $scope.pickedEmployee.id){
      $scope.employeeAvailable = rService.employeeAvailable[h];
    }
  };

// builds columns based on active column
  if($scope.activeColumn == 1){
    $scope.barEmployee1 = $scope.pickedEmployee;
    $scope.activeColumn = 1;
    $scope.column1show = true;
  }else{
    $scope.activeColumn +=($scope.activeColumn + 1);
    var bE = ("barEmployee" + ($scope.activeColumn))
    $scope[bE] = $scope.pickedEmployee;
    var bS =("column" + ($scope.activeColumn) + "show");
    $scope[bS] = true;
  }
  var dayChecker = new Date($scope.daySelected.year, $scope.daySelected.month, $scope.daySelected.day);
  var dC = dayChecker.getDay();
  var dW = dayList[dC];
  var start = (dW + "Start");
  var stop = (dW + "Stop");
  $scope.barEmployee1.availableStart = $scope.employeeAvailable[start];
  $scope.barEmployee1.availableStop = $scope.employeeAvailable[stop];
  console.log($scope.barEmployee1);
  console.log($scope.activeColumn);
};



$scope.addToGrid = function(){
  var activeBar = {};

  
  
  
}

// ==========  SAVE FUNCTION ==========
$scope.saveDay = function(){
  
  $scope.employeeEditorToggler = false;
  $scope.dayFlipper = false;
};


$scope.publishDay = function(){
  
  $scope.employeeEditorToggler = false;
  $scope.dayFlipper = false;
};





});
