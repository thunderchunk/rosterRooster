angular.module('rosterRooster').controller('schedule', function($scope, rService) {

    // ========== sets employee id number ==========

    $scope.employeeIdNumber = 1;

    // ========== sets initial date / creates variable to adjust display ==========

    $scope.currentDate = new Date();
    $scope.displayDate = $scope.currentDate;

    // ========== changes the displayDate variable to navigate months ==========

    $scope.adjustMonth = function(x) {
        if ($scope.displayDate.getDate() > 28)
            $scope.displayDate.setDay(27);
        if (($scope.displayDate.getMonth() === 0) && x === (-1)) {
            $scope.displayDate.setMonth(11);
            $scope.displayDate.setFullYear($scope.displayDate.getFullYear() - 1);
        } else if (($scope.displayDate.getMonth() === 11) && x === 1) {
            $scope.displayDate.setMonth(0);
            $scope.displayDate.setFullYear($scope.displayDate.getFullYear() + 1);
        } else {
            $scope.displayDate.setMonth($scope.displayDate.getMonth() + x);
        }
        $scope.titleMonth = $scope.prettyMonth();
        $scope.displayMonth = $scope.calendarMaker();
        $scope.colorSwitch = $scope.compare();
        $scope.comparisonArr = $scope.hourIndicator($scope.employeeIdNumber)
    };



    // ========== Builds the title ==========

    $scope.prettyMonth = function(x) {
        var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        var yearGetter = $scope.displayDate.getFullYear();
        var monthGetter = $scope.displayDate.getMonth();
        var prettyDisplay = (monthNames[monthGetter] + " " + yearGetter)
        return prettyDisplay;
    };

    // ========== makest the variable that holds the title ==========

    $scope.titleMonth = $scope.prettyMonth();

    // ========== constructor functions for calendar builder ==========

    $scope.previousMonth = function() {
        var currentMonth = $scope.displayDate.getMonth();
        if (currentMonth === 0) {
            return 11;
        } else {
            return currentMonth -= 1;
        }
    };

    $scope.previousYear = function() {
        return ($scope.displayDate.getFullYear() - 1)
    }

    $scope.prevDays = [];
    $scope.nextDays = [];

    // ========== builds the calendar on the view from scratch ==========

    $scope.calendarMaker = function() {
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
        };

        //Get last day of previous month
        var previousMonth = $scope.previousMonth();
        var xYear = currentYear;
        if (previousMonth === 11) {
            var xYear = $scope.previousYear();
        };
        var previousLastDay = new Date(xYear, previousMonth + 1, 0);
        var previousLastDayInt = previousLastDay.getDate();

        //Fill out front end of array with respective days from last month
        var firstDayOfWeek = firstDay.getDay();
        if (firstDayOfWeek != 0) {
            for (var j = previousLastDayInt; j > (previousLastDayInt - firstDayOfWeek); j--) {
                monthBuilder.unshift(j);
                $scope.prevDays.push(j);
            }
        };
        //add days to the end of the month to fill out calendar
        for (var k = 1; k <= (35 - (lastDayInt + firstDayOfWeek)); k++) {
            monthBuilder.push(k);
            $scope.nextDays.push(k);
        };

        return monthBuilder;
    };
    // ========== variable that holds calendar array for ng repeat ==========

    $scope.displayMonth = $scope.calendarMaker();

    // ========== makes the calendar object ==========

    $scope.calendarBuilderObject = function() {
      var currentMonth = $scope.displayDate.getMonth();
        var calendarBuilder = [];

        for (var i = 0; i < $scope.displayMonth.length; i++) {
            var x = new Object();
            x.day = $scope.displayMonth[i];
            calendarBuilder.push(x);
        };

        // set start and stop for month assignment
        var z = ($scope.prevDays.length);
        var y = ($scope.nextDays.length);

        //set month value for core days
        for (var j = z; j < $scope.displayMonth.length - (z + y); j++) {
          calendarBuilder[j].month = currentMonth;
        };


        //set month value for starter days
        var prevMonth;

        if (currentMonth == 0){
          prevMonth = 11;
        }else{prevMonth = (currentMonth - 1)};


        for (var k = 0; k < z; k++) {
          calendarBuilder[k].month = prevMonth;
        };

        //set month value for stopper days
        var nxtMonth;

        if (currentMonth == 11){
          nxtMonth = 0;
        }else{nxtMonth = currentMonth + 1};


        for (var l = ($scope.displayMonth.length - y); l < $scope.displayMonth.length; l++) {
          calendarBuilder[l].month = nxtMonth;
        };

        return calendarBuilder;
    };

      //makes the object a variable
    $scope.calendarBuilder = $scope.calendarBuilderObject();



    // ========== compares current calendar with hour indicator array ==========
    $scope.compare = function() {
      var z = ($scope.prevDays.length);
      var y = ($scope.nextDays.length);
        for (var j = z; j < ($scope.displayMonth.length - y); j++) {
            for (var k = 0; k < $scope.comparisonArr.length; k++) {
                if ($scope.displayMonth[j] == $scope.comparisonArr[k]) {
                    $scope.calendarBuilder[j].work = true;
                }
            }
        }
        console.log($scope.calendarBuilder)
    };




    $scope.colorSwitch = $scope.compare();

});
