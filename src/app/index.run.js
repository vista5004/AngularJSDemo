(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .run(runBlock)
    .run(pageWidth);

  /** @ngInject */
  function runBlock($log,$rootScope) {
    $rootScope.$on("$stateChangeSuccess", function (evt, toState, toParams, fromState, fromParams) {
      $rootScope.path=toState.name;
    });
    $log.debug('runBlock end');
  };
  function pageWidth(){
    setTimeout(function () {
      var beginWidth=$(window).width()-220;
      /*页面内容部分*/
      $(".mainPage").css({
        "width":beginWidth
      });
      /*页面头部部分*/
      $(".top_bar").css({
        "width":beginWidth
      })
    },100);
    $(window).resize(function () {
      var width=$(window).width();
      var contentWidth=width-220;
      $(".mainPage").css({
        "width":contentWidth
      });
      $(".top_bar").css({
        "width":contentWidth
      })
    })
  }
})();
