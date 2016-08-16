/**
 * Created by tiantan on 2016/7/11.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("cycleContent", ['messageService',function (messageService) {
      return{
        restrict:'EA',
        replace:true,
        transclude:true,
        templateUrl: function (element, attrs) {
          if(attrs.contentName==="home"){
            return 'app/components/cycleContent/cycleContentHome.html'
          }else if(attrs.contentName==="layout"){
            return 'app/components/cycleContent/cycleContentLayout.html'
          }
          else if(attrs.contentName==="chart"){
            return 'app/components/cycleContent/cycleContentChart.html'
          }
          else if(attrs.contentName==="mail"){
            return 'app/components/cycleContent/cycleContentMail.html'
          }
          else if(attrs.contentName==="form"){
            return 'app/components/cycleContent/cycleContentForm.html'
          }
          else if(attrs.contentName==="page"){
            return 'app/components/cycleContent/cycleContentPage.html'
          }
          else if(attrs.contentName==="element"){
            return 'app/components/cycleContent/cycleContentElement.html'
          }
          else if(attrs.contentName==="table"){
            return 'app/components/cycleContent/cycleContentTable.html'
          }
          else if(attrs.contentName==="photo"){
            return 'app/components/cycleContent/cycleContentPhoto.html'
          }
          else if(attrs.contentName==="animate"){
            return 'app/components/cycleContent/cycleContentAnimate.html'
          }
          else if(attrs.contentName==="tool"){
            return 'app/components/cycleContent/cycleContentTool.html'
          }
        },
        link: function (scope, element, attrs) {
          scope.sendTittle= function (message) {
            messageService.storeMessage(message);
            messageService.sendMessage();
          };
          scope.$watch('isLeftBarOpen', function (newValue) {
            if(newValue===true){
              scope.left_bar_items_show=true;
            }else{
              scope.left_bar_items_show=false;
            }
          });
          $(element).find("a").on("click",function(){
          /*  console.log(this);*/
            $(element).find("a").css({
              "color":"#8994a6"
            });
            $(this).css({
              "color":"white"
            })
          })

        }
      }
    }])
})()
