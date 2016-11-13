angular.module('rosterRooster')
.controller('employee', function($scope,$window,rService,availability,employers,employees,users){
  
  $scope.employers = employers;
  // console.log('employers =', $scope.employers);
  $scope.employees = employees;
  // console.log('employees =', $scope.employees);
  $scope.users = users;
  // console.log('users =', $scope.users);
  $scope.availability = availability;
  // console.log('availability =', $scope.availability);
  
  
  // ========== sets employee id number ==========
  $scope.employeeidNumber = 1;
  // ========== sets employer  number ==========
  $scope.employeridNumber = 1;

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
  $scope.selectedIdNumber = $scope.employeeidNumber;  //default login id number
  // ========== end master Variables ==========
  
  
  // ==========  BUILDS MAIN PAGE LIST ==========
  
  $scope.employeeLister = function(){
    var tempList = [];
    // console.log("employeeData is " , rService.employeeData);
    for (var i = 0; i < $scope.employees.length; i++) {
        if ($scope.employeridNumber == $scope.employees[i].employerid){
        tempList.push($scope.employees[i]);
        $scope.employeeList.push($scope.employees[i]);
      }
    }
    // console.log("employeeLister availHours is " , $scope.availHours);
    // console.log("employeeLister userData is " , $scope.userData);
    // console.log("employeeLister currentEmployee is " , $scope.currentEmployee);
    return tempList;
  };
  // ==========  ENDS MAIN PAGE LIST ==========
  
  });