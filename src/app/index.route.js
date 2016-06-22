(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.chart',{
        url:'/chart',
        templateUrl:'app/main/chart.html',
        controller:'chartController'
      })
      .state('home.finance',{
        url:'/finance',
        template:"<div>555</div>",

      })

    $urlRouterProvider.otherwise('/home');
  }

})();
