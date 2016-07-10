/**
 * Created by tiantan on 2016/7/11.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive("cycleContent", function () {
      return{
        restrict:'EA',
        templateUrl: function (element, attrs) {
          switch (attrs.contentName){
            case "home":
              console.log(attrs.contentName);
                  return "app/components/cycleContent/cycleContentHome.html";
            break;
            case "layout":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "chart":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "mail":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "form":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "element":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "table":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "photo":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "animate":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
            case "tool":
              return "app/components/cycleContent/cycleContentHome.html";
              break;
          }
        }|"app/components/cycleContent/cycleContentEmpty.html",
        link: function (scope, element, attrs) {
          console.log(1);
        }
      }
    })
})()
