(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($anchorScroll, $rootScope, $location, $window) {
    $anchorScroll.yOffset = 50;

    $rootScope
      .$on('$stateChangeSuccess', function() {
          if ($window.ga) {
            $window.ga('send', 'pageview', { page: $location.path() });
          }
      });
  }
  runBlock.$inject = ['$anchorScroll', '$rootScope', '$location', '$window'];

})();
