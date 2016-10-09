/**
 * Created by tiantan on 2016/8/16.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("topbarName", ["$compile","messageService","$timeout","$location","$rootScope",function ($compile,messageService,$timeout,$location,$rootScope) {
      return{
        restrict:'EA',
        scope:{},
        templateUrl:'app/components/topBarName/topBarName.html',
        link: function (scope, element, attr) {
          var number=null;
          scope.$on("tittleName", function (e, data) {
            scope.messageArray=messageService.messageArray;
            number=messageService.messageArray.length-1;
           /* $timeout(function () {
              $(".repeatBox").css({
                background:'#f3f3f4'
              });
              $(".repeatBox").eq(number).css({
                background:'#2f4050'
              })
            },10)*/
            /**/
            //console.log($location);
            $rootScope.$on("$stateChangeSuccess", function (evt,toState,toParams,formState,formParams) {
                var state=toState.name;//获取路由状态名 home.home1
                var routeName=state.split(".").pop();//转变成数组，在取得最后一项
                $(".repeatBox").css({//先遍历统一样式
                    background:'#f3f3f4'
                });
                var elementsDiv=$(".repeatBox");//获取所有topbar内容
                for(var i=0;i<elementsDiv.length;i++){//
                  //console.log("length"+$(elementsDiv[i]).attr("state"))
                  if($(elementsDiv[i]).attr("state")===routeName){//找到路由中传递的状态与topbar中项相同的内容
                    $(elementsDiv[i]).css({
                      "background":"#2f4050"
                    })
                  }
                }
            })
          });
          scope.deleteItem= function (data) {
            //console.log(data.tittle);
            messageService.destoryMessage(data.tittle);
            messageService.sendMessage()
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
