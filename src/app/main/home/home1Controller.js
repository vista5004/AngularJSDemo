/**
 * Created by tiantan on 2016/7/19.
 */
(function(){
  angular.module("angularJsdemo")
    .controller("home1Controller",["$scope","getUpdateService",function($scope,getUpdateService){
      var vm=$scope.vm={};
      vm.isUpdateContentOpen=false;
      vm.openUpdateContent= function () {
        vm.isUpdateContentOpen=!vm.isUpdateContentOpen;
      };
      var promise=getUpdateService.updateGet();
      promise.then(function (data) {
        vm.updateContents=data;
      }, function () {
        console.log("fail to load data");
      })
    }])

})()
