angular.module('rosterRooster')
.directive('rrNav', function(){
return{
  restrict: 'E',
  templateUrl: './views/nav.html',
  link: function( scope, element, attributes ) {
    
    scope.flipper = false;
    scope.adminFlipper = false;
    
    scope.userMenuToggler = function(){
      scope.flipper = true;
    };
    scope.userMenuTogglerOff = function(){
      scope.flipper = false;
    };
    scope.adminMenuToggler = function(){
      scope.adminFlipper = true;
    };
    scope.adminMenuTogglerOff = function(){
      scope.adminFlipper = false;
    };
    
  }
};



});
