/**
 * Created by tiantan on 2016/7/25.
 */
(function () {
  angular
    .module("angularJsdemo")
    .controller("datePickerController", ['$scope', function ($scope) {
      var date=$scope.searchDate;
      console.log(date);
      $scope.today= function () {
        $scope.dt=new Date();
      };
      $scope.today();
      /*基础设置*/
      $scope.options={
        minDate: new Date(),
        showWeeks: true
      };
      $scope.setData= function (year, month, day) {
        $scope.dt=new Date(year,month,day)
      };
      $scope.clear= function () {
        $scope.dt=null;
      };
      $scope.toggleMin= function () {
        $scope.options.minDate = $scope.options.minDate ? null : new Date();
      };
      $scope.toggleMin();
    }])
})()
