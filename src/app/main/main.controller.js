(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .controller('MainController', ['$scope', function ($scope) {
        var vm=$scope.vm={};
        vm.superName="Cycle";
        vm.tittle="管理员";
        vm.isDivContent=true;
        vm.openContent= function () {
          vm.isDivContent=!vm.isDivContent;
        }
    }]);


})();
