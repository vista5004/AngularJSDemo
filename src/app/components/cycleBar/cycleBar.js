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
   .directive("cycleBarGroup",['$compile',function ($compile) {
      return{
        restrict:'EA',
        templateUrl:"app/components/cycleBar/cycleBarGroup.html",
        require:'?^cycleBar',
        transclude:true,
        replace:true,
        scope:{},
        link: function (scope,element,attr,cycleBar) {
          cycleBar.addGroup(scope);
          var openClass=attr.openClass;
          var isOpen=attr.isOpen;
          var beforeClass=attr.beforeClass;
          var lastClass=attr.lastClass;
          var mainClass=attr.mainClass;
          var keyName=mainClass.split("_").pop();
          //console.log(keyName);
          var ele=angular.element('<div cycle-content ></div>');
          ele.attr('content-name',keyName);
          var eleScope=$compile(ele)(scope);
          element.append(eleScope);
          scope.name= attr.tittle;
          element.find("span").addClass(beforeClass);
          element.find("i").addClass(lastClass);
          element.addClass(mainClass);
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
    }])

})()
