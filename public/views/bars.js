angular.module('rosterRooster')
.directive('bars', function(){
  
  return{
    templateUrl: "./views/bars.html",
    link: function(scope, element, attr){
        
      console.log(element);
      element[0].children[0].style.height = scope.bar.s1height;
      element[0].children[1].style.height = scope.bar.barHeight;
      element[0].children[1].style.top = scope.bar.barStart;
      element[0].children[1].style.backgroundColor = scope.bar.barColor;
      element[0].children[2].style.top = scope.bar.s2start;
      element[0].children[2].style.height = scope.bar.s2height;
    }
  }
  
  
  
  
});