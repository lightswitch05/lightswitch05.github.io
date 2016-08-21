angular
  .module('app')
  .directive('dwOpenSource', openSource);

function openSource() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/open-source/open-source.html',
    scope: {}
  };

  return directive;
}
