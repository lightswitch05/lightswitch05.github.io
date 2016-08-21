angular
  .module('app')
  .directive('dwHome', home);

function home() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/home/home.html',
    scope: {}
  };

  return directive;
}
