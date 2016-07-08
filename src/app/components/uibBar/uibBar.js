/**
 * Created by tiantan on 2016/7/8.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("cycleBar",function () {
      return{
        restrict:'EA',
        templateUrl:'app/components/uibBar/uibLeftBar.html',
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
   .directive("cycleBarGroup", function () {
      return{
        restrict:'EA',
        templateUrl:"app/components/uibBar/uibLeftBarGroup.html",
        require:'?^cycleBar',
        transclude:true,
        replace:true,
        scope:{},
        link: function (scope,element,attr,cycleBar) {
          cycleBar.addGroup(scope);
          var openClass=attr.openClass;
          var isOpen=attr.isOpen;
          scope.name= attr.tittle;

          scope.$watch("isLeftBarOpen", function (newValue) {
            if(newValue===true){
              element.addClass(openClass);
              cycleBar.closeOther(scope);
            }else{
              element.removeClass(openClass);
            }
          })
        }
      }
    })

})()
