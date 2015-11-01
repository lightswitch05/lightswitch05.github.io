(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($logProvider, $compileProvider, $httpProvider) {
    var debug = false;
    $logProvider.debugEnabled(debug);
    $compileProvider.debugInfoEnabled(debug);
    $httpProvider.useLegacyPromiseExtensions(false);
  }

  config.$inject = ['$logProvider', '$compileProvider', '$httpProvider'];

})();
