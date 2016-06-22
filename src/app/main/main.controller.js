(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .controller('MainController', ['$scope', function ($scope) {
        var vm=$scope.vm={};
        vm.finaceShow=false;
        vm.chartShow=false;
        vm.chartShowFun= function () {
          vm.finaceShow=false;
          vm.chartShow=!vm.chartShow;
        };
       vm.finaceShowFun=function(){
         vm.chartShow=false;
         vm.finaceShow=!vm.finaceShow;
       }
    }]);


})();
