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
              for(var i=0;i<element.find('a').length;i++){
                $(element.find('a')[i]).removeClass('left_bar_active_click');
                $(element.find('a')[i]).removeClass('left_bar_active_hover');
              }
              $(this).addClass('left_bar_active_click');
            });
            $(element).find('a').hover(function () {
             $(this).addClass('left_bar_active_hover');
            }, function () {
              $(this).removeClass('left_bar_active_hover');
            })
          }
        }
    })
})();
