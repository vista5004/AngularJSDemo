(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .controller('MainController', ['$scope','$rootScope',function ($scope,$rootScope) {
        var vm=$scope.vm={};
        vm.superName="Cycle";
        vm.tittle="管理员";
        vm.isDivContent=false;
        vm.openContent= function () {
          vm.isDivContent=!vm.isDivContent;
        };
      $scope.$on('$viewContentLoaded', function () {
        var width=$(window).width();
        var contentWidth=width-220;
        console.log(contentWidth);
        $(".mainPage").css({
          "width":contentWidth
        })
      })
    }]);


})();
