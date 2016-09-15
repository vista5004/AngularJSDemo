/**
 * Created by tiantan on 2016/7/8.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("cycleBar",function () {
      return{
        restrict:'EA',
        templateUrl:'app/components/cycleBar/cycleBar.html',
        replace:true,
        transclude: true,
       controller: function () {
          var scopeGroup=[];
          this.closeOther= function (scope) {
            angular.forEach(scopeGroup, function (value) {
              if(value!=scope){
                value.isLeftBarOpen=false;
              }
            })
          };
          this.addGroup= function (scope) {
            scopeGroup.push(scope);
            var that=this;
            scope.$on("$destroy", function () {
              that.removeGroup(scope);
            })
          };
          this.removeGroup= function (scope) {
            var index=scopeGroup.indexOf(scope);
            if(index!=-1){
              scope.splice(index,1);
            }
          }
        }
      }
    })
   .directive("cycleBarGroup",['$compile','messageService',function ($compile,messageService) {
      return{
        restrict:'EA',
        templateUrl:"app/components/cycleBar/cycleBarGroup.html",
        require:'?^cycleBar',
        transclude:true,
        replace:true,
        scope:{},
        link: function (scope,element,attr,cycleBar) {
          scope.changeStyleAndSendMessage= function () {
            scope.isLeftBarOpen=!scope.isLeftBarOpen;
            if(attr.messageName){
              messageService.storeMessage(attr.messageName);
              messageService.sendMessage();
            }
          };
          cycleBar.addGroup(scope);
          var openClass=attr.openClass;
          //var isOpen=attr.isOpen;
          var beforeClass=attr.beforeClass;
          var lastClass=attr.lastClass;
          var mainClass=attr.mainClass;
          var keyName=mainClass.split("_").pop();
          //console.log(keyName);
          var ele=angular.element('<div cycle-content></div>');
          ele.attr('content-name',keyName);
          var eleScope=$compile(ele)(scope);
          element.append(eleScope);
          scope.name= attr.tittle;
          element.find("span").addClass(beforeClass);
          element.find("i").addClass(lastClass);
         /* element.addClass(mainClass);*/
          scope.$watch("isLeftBarOpen", function (newValue) {
            if(newValue===true){
              element/*.removeClass("left_bar_body_bar").addClass(openClass)*/.css({
                height:openClass,
                background:'rgb(37,56,72)'
              });
              cycleBar.closeOther(scope);
            }else{
              element/*.removeClass(openClass).addClass("left_bar_body_bar")*/.css({
                height:50,
                background:'rgb(47,64,80)'
              });
            }
          })
        }
      }
    }])

})();
