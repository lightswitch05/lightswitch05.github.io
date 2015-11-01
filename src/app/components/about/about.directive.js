angular
  .module('app')
  .directive('dwAbout', about);

function about() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/about/about.html',
    scope: {}
  };

  return directive;
}
