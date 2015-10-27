angular
  .module('app')
  .directive('openSource', openSource);

function openSource() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/open-source/open-source.html',
    scope: {}
  };

  return directive;
}
