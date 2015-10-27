(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('blog', {
        url: "/blog",
        template: '<blog></blog>'
      })
      .state('openSource', {
        url: "/open-source",
        template: '<open-source></open-source>'
      });

    $urlRouterProvider.otherwise('/blog');
  }

})();
