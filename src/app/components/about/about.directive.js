angular
  .module('app')
  .directive('about', about);

function about() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/about/about.html',
    scope: {}
  };

  return directive;
}
