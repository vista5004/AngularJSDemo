/**
 * Created by tiantan on 2016/8/16.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("topbarName", ["$compile","messageService","$timeout",function ($compile,messageService,$timeout) {
      return{
        restrict:'EA',
        scope:{},
        templateUrl:'app/components/topBarName/topBarName.html',
        link: function (scope, element, attr) {
          var number=null;
          scope.$on("tittleName", function (e, data) {
            scope.messageArray=messageService.messageArray;
            number=messageService.messageArray.length-1;

            $timeout(function () {
              $(".repeatBox").css({
                background:'#f3f3f4'
              });
              $(".repeatBox").eq(number).css({
                background:'#2f4050'
              })
            },10)
          });
          scope.deleteItem= function (data) {
            //console.log(data.tittle);
            messageService.destoryMessage(data.tittle);
            messageService.sendMessage();

          };
          scope.select= function (data) {
            console.log(data.key);
            id=data.key;//通过在指令上设置id来对应data.key，并且data.key是通过ng-repeat来传入的所以，这样就可以实现data的不一样。

            $(".repeatBox").css({
              background:'#f3f3f4'
            });
            $("#"+id).css({
              background:'#2f4050'
            });
          };

        }
      }
    }])
})()
