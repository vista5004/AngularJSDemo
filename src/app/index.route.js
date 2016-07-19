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
      .state('home.home1',{
        url:'/home1',
        templateUrl:'app/main/home/home1.html',
        controller:'home1Controller'
      })
      .state('home.home2',{
        url:'/home2',
        templateUrl:'app/main/home/home2.html',
        controller:'home2Controller'
      })
      .state('home.home3',{
        url:'/home3',
        templateUrl:'app/main/home/home3.html',
        controller:'home3Controller'
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
