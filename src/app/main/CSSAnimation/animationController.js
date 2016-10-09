/**
 * Created by tiantan on 2016/9/22.
 */

(function () {
  angular
    .module('angularJsdemo')
    .controller("animationController", ['$scope','cssAnimationMessageService',function ($scope,cssAnimationMessageService) {
        $scope.sendAnimation= function (message) {
          $scope.addClassName=message;
          console.log(message);
        };

    }])
})();
