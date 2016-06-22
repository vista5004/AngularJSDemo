(function() {
  'use strict';

  angular
    .module('angularJsdemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
