angular
  .module('app')
  .directive('dwToolbar', toolbar);

function toolbar() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/toolbar/toolbar.html',
    scope: {}
  };

  return directive;
}
