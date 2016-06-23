/**
 * Created by tiantan on 2016/6/23.
 */

angular
  .module('angularJsdemo')
  .controller('chartOverViewController',['$scope','getDataService','NgTableParams', function ($scope,getDataService,NgTableParams) {

    var vm=$scope.vm={};
    var promise=getDataService.getOverviewJSON();
    promise.then(function (data) {
      console.log(data);
      vm.tableParams=new NgTableParams({},{
        dataset:data
      })
    }, function (data) {

    })
  }])
