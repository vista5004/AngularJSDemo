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
      .state('home.layout',{
        url:'/layout',
        templateUrl:"app/main/layout/layout.html",
        controller:"layoutController"
      })
      .state('home.Echart',{
        url:'/Echart',
        templateUrl:'app/main/chart/Echart.html',
        controller:"EchartController"
      })
      .state('home.D3',{
        url:'/D3',
        templateUrl:'app/main/chart/D3.html',
        controller:'D3Controller'
      })
      .state("home.HighChart",{
        url:'/HighChart',
        templateUrl:'app/main/chart/HighChart.html',
        controller:'HighChartController'
      })
      .state("home.consignee",{
        url:'/consignee',
        templateUrl:'app/main/mail/consignee.html',
        controller:'consigneeController'
      })
      .state("home.outBox",{
        url:'/outBox',
        templateUrl:'app/main/mail/outBox.html',
        controller:'outBoxController'
      })
      .state("home.letterWriting",{
        url:"/letterWriting",
        templateUrl:"app/main/mail/letterWriting.html",
        controller:"letterWritingController"
      })
      .state('home.normalForm',{
        url:'/normalForm',
        templateUrl:'app/main/form/normalForm.html',
        controller:'normalFormController'
      })
      .state("home.normalValidate",{
        url:"/normalValidate",
        templateUrl:'app/main/form/normalValidate',
        controller:'normalValidateController'
      })
      .state("home.advanceForm",{
        url:'/advanceForm',
        templateUrl:'app/main/form/advanceForm.html',
        controller:'advanceFormController'
      })
      .state("home.formGuide",{
        url:'/formGuide',
        templateUrl:'app/main/form/formGuide.html',
        controller:'formGuideController'
      })


    $urlRouterProvider.otherwise('/home');
  }

})();
