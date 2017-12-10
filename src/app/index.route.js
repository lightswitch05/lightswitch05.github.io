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
      .state('blog.fullpost', {
        url: "/:id",
        template: '<dw-blog></dw-blog>',
        onEnter: ['$state', '$stateParams', '$location', '$anchorScroll', function ($state, $stateParams, $location, $anchorScroll) {
          setTimeout(function() {
            $location.hash($stateParams.id);
            $anchorScroll();
          });
        }]
      })
      .state('openSource', {
        url: "/open-source",
        template: '<dw-open-source></dw-open-source>'
      });

    $urlRouterProvider.otherwise('/open-source');
  }

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
