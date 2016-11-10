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
  
  });