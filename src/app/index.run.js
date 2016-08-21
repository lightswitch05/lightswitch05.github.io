(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($log, $anchorScroll) {
    $anchorScroll.yOffset = 50;
    $log.debug('runBlock end');
  }

  runBlock.$inject = ['$log', '$anchorScroll'];

})();
