(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('blog', {
        url: "/blog",
        template: '<dw-blog></dw-blog>'
      })
      .state('openSource', {
        url: "/open-source",
        template: '<dw-open-source></dw-open-source>'
      });

    $urlRouterProvider.otherwise('/blog');
  }

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
