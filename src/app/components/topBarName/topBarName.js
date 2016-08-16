/**
 * Created by tiantan on 2016/8/16.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("topbarName", ["$compile","messageService",function ($compile,messageService) {
      return{
        restrict:'EA',
        scope:{},
        replace:true,
        templateUrl:'app/components/topBarName/topBarName.html',
        link: function (scope, element, attr) {

          scope.$on("tittleName", function (e, data) {
            var tittle=data;
            messageService.storeMessage(tittle);
          });
          console.log("11"+messageService.popMessage());
          var ele=angular.element("<div class='tittleBox'><span class='tittleName'></span><i class='glyphicon glyphicon-remove'></i></div>");
         // ele.attr('tittle-name',tittle);
          var link=$compile(ele)(scope);
          element.append(link);

        /*  var span=$("<div class='tittleBox'><span class='tittleName'></span><span class='tittleClose'><i></i></span></div>");
          $(element).append(span);
          $(".tittleName").html(vm.tittle);*/




          /*var spanScope=$compile(span)(scope);*/

          //element.append(spanScope);

        }
      }
    }])
})()
