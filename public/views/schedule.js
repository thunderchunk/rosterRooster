angular.module('rosterRooster').controller('schedule', function($scope, rService){

// ========== sets employee id number ==========

$scope.employeeIdNumber = 1;

// ========== sets initial date / creates variable to adjust display ==========

$scope.currentDate = new Date();
$scope.displayDate = $scope.currentDate;

// ========== changes the displayDate variable to navigate months ==========

$scope.adjustMonth = function(x){
  if($scope.displayDate.getDate() > 28)
    $scope.displayDate.setDay(27);
  if(($scope.displayDate.getMonth() === 0) && x === (-1)){
    $scope.displayDate.setMonth(11);
    $scope.displayDate.setFullYear($scope.displayDate.getFullYear() - 1);
  }else if (($scope.displayDate.getMonth() === 11) && x === 1) {
    $scope.displayDate.setMonth(0);
    $scope.displayDate.setFullYear($scope.displayDate.getFullYear() + 1);
  }else{
    $scope.displayDate.setMonth($scope.displayDate.getMonth() + x);
  }
  $scope.titleMonth = $scope.prettyMonth();
  $scope.displayMonth = $scope.calendarMaker();
  $scope.colorSwitch = $scope.compare();
};



// ========== Builds the title ==========

$scope.prettyMonth = function(x){
  var monthNames = ['JANUARY',	'FEBRUARY',	'MARCH',	'APRIL',	'MAY',	'JUNE',	'JULY',	'AUGUST',	'SEPTEMBER',	'OCTOBER',	'NOVEMBER',	'DECEMBER'];
  var yearGetter = $scope.displayDate.getFullYear();
  var monthGetter = $scope.displayDate.getMonth();
  var prettyDisplay = (monthNames[monthGetter] + " " + yearGetter)
  return prettyDisplay;
};

// ========== makest the variable that holds the title ==========

$scope.titleMonth = $scope.prettyMonth();


$scope.previousMonth = function(){
  var currentMonth = $scope.displayDate.getMonth();
  if (currentMonth === 0) {
    return 11;
  }else{
    return currentMonth -=1;
  }
};

$scope.previousYear = function(){
return( $scope.displayDate.getFullYear() - 1)
}

// ========== builds the calendar on the view from scratch ==========

$scope.calendarMaker = function(){
  var monthBuilder = [];
  // get month and year information
  var currentMonth = $scope.displayDate.getMonth();
  var currentYear = $scope.displayDate.getFullYear();
  // get first and last days in the current month
  var firstDay = new Date(currentYear, currentMonth, 1);
  var firstDayInt = firstDay.getDate();
  var lastDay = new Date(currentYear, currentMonth + 1, 0);
  var lastDayInt = lastDay.getDate();
  // build an array with the days of the month
  for (var i = 1; i <= lastDayInt; i++) {
    monthBuilder.push(i);
  }

  //Get last day of previous month
  var previousMonth = $scope.previousMonth();
  var xYear = currentYear;
    if(previousMonth === 11){
      var xYear = $scope.previousYear();}
  var previousLastDay = new Date(xYear, previousMonth + 1, 0);
  var previousLastDayInt = previousLastDay.getDate();

  //Fill out front end of array with respective days from last month
  var firstDayOfWeek = firstDay.getDay();
  if(firstDayOfWeek != 0){
  for (var j = previousLastDayInt; j > (previousLastDayInt - firstDayOfWeek); j--) {
    monthBuilder.unshift(j);
    }
  }
  //add days to the end of the month to fill out calendar
  for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
    monthBuilder.push(k);
  }
  return monthBuilder;
}

// ========== variable that holds calendar array for ng repeat ==========

$scope.displayMonth = $scope.calendarMaker();

// ========== finds which days the employee works ==========
$scope.assignedHours = rService.assignedHours;

$scope.hourIndicator = function(x){
  var sorter = $scope.assignedHours;
  var comparisonArray = [];
  for (var i = 0; i < sorter.length; i++) {
    var tempArray = sorter[i].date.split("-");
    if ((sorter[i].employeeId === x) && (tempArray[0] = ($scope.displayDate.getMonth() + 1))){
      comparisonArray.push(tempArray[1]);
    }
  }

  return comparisonArray;
};

//invokes the function and sets the result to a variable
$scope.comparisonArr = $scope.hourIndicator($scope.employeeIdNumber);

// ========== compares current calendar with hour indicator array ==========
$scope.compare = function(){
  var newComparisonArray = [];
  for (var i = 0; i < $scope.displayMonth.length; i++) {
    for (var j = 0; j < $scope.comparisonArr.length; j++) {
      if($scope.displayMonth[i] == $scope.comparisonArr[j] ){
        newComparisonArray.push(true);
      }
    }
    if (!newComparisonArray[i]){
      newComparisonArray.push(false);
    }
  }
  return newComparisonArray;
};

$scope.colorSwitch = $scope.compare();

});
