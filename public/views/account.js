angular.module('rosterRooster').controller('account', function($scope,rService){
  
  
    // ========== sets employee id number ==========

    $scope.employeeIdNumber = 1;
    $scope.employerIdNumber = 1;

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

      // ========== compares calendar object wi availability ==========


      var availableHours = rService.employeeAvailable;
      var employeeFinder = function(){
        for (var m = 0; m < availableHours.length; m++) {
          if(availableHours[m].employeeId === $scope.employeeIdNumber){
            return availableHours[m];
          }
        }
      }
      var userAvailableHours = employeeFinder();
      
      var sd = [0, 7, 14, 21, 28, 35];
      var md = [1, 8, 15, 22, 29, 36];
      var tu = [2, 9, 16, 23, 30, 37];
      var wd = [3, 10, 17, 24, 31, 38];
      var th = [4, 11, 18, 25, 32, 39];
      var fr = [5, 12, 19, 26, 33, 40];
      var st = [6, 13, 20, 27, 34, 41];
      
      for (var n = 0; n < sd.length; n++) {
        var dayParser = sd[n];
        if(userAvailableHours.sdStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var o = 0; o < md.length; o++) {
        var dayParser = md[o];
        if(userAvailableHours.mStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var p = 0; p < tu.length; p++) {
        var dayParser = tu[p];
        if(userAvailableHours.tuStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var q = 0; q < wd.length; q++) {
        var dayParser = wd[q];
        if(userAvailableHours.wStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var r = 0; r < th.length; r++) {
        var dayParser = th[r];
        if(userAvailableHours.thStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var s = 0; s < fr.length; s++) {
        var dayParser = fr[s];
        if(userAvailableHours.fStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
      for (var t = 0; t < st.length; t++) {
        var dayParser = st[t];
        if(userAvailableHours.stStart != "" && finalArray[dayParser]){
          finalArray[dayParser].work = true;
        }
      };
      
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
});
