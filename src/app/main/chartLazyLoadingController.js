/**
 * Created by tiantan on 2016/6/24.
 */
  angular
    .module('angularJsdemo')
    .controller("chartLazyLoadingController", ["$scope","getDataService","NgTableParams","$rootScope",function ($scope,getDataService,NgTableParams,$rootScope) {
      var vm=$scope.vm={};

      $scope.$on("lazyLoadingDataset", function (e, message) {
        vm.tableParams=new NgTableParams({},{
          dataset:message
        })
      });
    }])
