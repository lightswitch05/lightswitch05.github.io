angular
  .module('app')
  .directive('home', home);

function home() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/home/home.html',
    scope: {}
  };

  return directive;
}
