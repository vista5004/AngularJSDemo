/**
 * Created by tiantan on 2016/6/23.
 */
angular
  .module('angularJsdemo')
  .directive("ngPath", function () {
    return{
      restrict:'EA',

      templateUrl:'app/components/ngpath/ngPathDirective.html',
      link: function (scope, element, attr) {

        attr.$observe('ngPath', function (newValue, oldValue) {
          scope.stateAry=[];
          if(newValue===undefined) {
            return
          }
          var pathArray=newValue.split(".");
          for(var i=0;i<pathArray.length;i++){
            var path="#";
            for(var j=0;j<i+1;j++){
              path+='/'+pathArray[j];
            }
            scope.stateAry.push({
              name:pathArray[i],
              url:path
            })
          }
        },true)
      }
    }
  })
