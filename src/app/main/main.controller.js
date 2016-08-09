(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .controller('MainController', ['$scope','$rootScope','getUpdateService','$interval',function ($scope,$rootScope,getUpdateService,$interval) {
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
      });
      var url="app/data/Mail.json";
      //默认没有刚开始没有新邮件提示，需要从后台获取
      vm.isNewMail=false;
      vm.isNewMessage=false;
      var message=$interval(function () {
        getUpdateService.newMailMessage(url).then(function (number) {
          if(number[0].newMail>0){
            vm.isNewMail=true;
            vm.newMailNumber=number[0].newMail;
          }else{
            vm.isNewMail=false;
          }
          /*对于信息message*/
          if(number[1].newMessage>0){
            vm.isNewMessage=true;
            vm.newMessageNumber=number[1].newMessage;
          }

        }, function (error) {
          console.log(error)
        })
      },1000)
    }]);

})();
