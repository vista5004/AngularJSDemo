(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope) {
    $rootScope.$on("$stateChangeSuccess", function (evt, toState, toParams, fromState, fromParams) {
      $rootScope.path=toState.name;
    })
    $log.debug('runBlock end');
  }

})();
