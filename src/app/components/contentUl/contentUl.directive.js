/**
 * Created by tiantan on 2016/7/7.
 */
(function () {
  angular
    .module('angularJsdemo')
    .directive('contentUl', function () {
        return{
          restrict:'EA',
          replace:true,
          templateUrl:'app/components/contentUl/contentUl.html',
          link: function (scope,element,attr) {
            console.log(element.find('a'));
            element.find("a").on("click", function () {
              console.log(this);
              
            })
          }
        }
    })
})();
