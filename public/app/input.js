angular.module('rosterRooster')
  .directive('input',  function ($parse) {
    return {
            restrict: 'E',
            require: '?ngModel',
            link: function (scope, element, attrs) {
                if(attrs.value) {
                    $parse(attrs.ngModel).assign(scope, attrs.value);
                }
            }
        };

  return directiveDefinitionObject;
});