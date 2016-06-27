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
      .state('home.chart.overview',{
        url:'/overview',
        templateUrl:'app/main/chartOverView.html',
        controller:'chartOverViewController'
      })
      .state('home.chart.lazyloading',{
        url:'/lazyloading',
        templateUrl:'app/main/chartLazyLoading.html',
        controller:'chartLazyLoadingController'
      })
      .state('home.finance',{
        url:'/finance',
        templateUrl:"app/main/finance.html",
        controller:"financeController"
      })
      .state('home.finance.partofmoney',{
        url:'/partofmoney',
        templateUrl:'app/main/'
      })

    $urlRouterProvider.otherwise('/home');
  }

})();
