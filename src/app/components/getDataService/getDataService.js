/**
 * Created by tiantan on 2016/6/23.
 */
angular
  .module('angularJsdemo')
  .factory('getDataService',['$http','$q',function ($http,$q) {
    var getOverviewJSON= function () {
      var deferred=$q.defer();
      $http({
        method: 'GET',
        url:'app/data/overview.json'
      }).success(function (data, status, headers, config) {
        deferred.resolve(data)
      }).error(function (data, status, headers, config) {
        deferred.reject(data)
      });
      return deferred.promise;
    };
    var getFinanceJSON= function () {
      var deferred=$q.defer();
      $http({
        method:'GET',
        url:'app/data/financeSalary.json'
      }).success(function (data, status, header, config) {
        deferred.resolve(data);
      }).error(function (data, status, header, config) {
        deferred.reject(data)
      });
      return deferred.promise;
    };
    return {
      getOverviewJSON:getOverviewJSON,
      getFinanceJSON:getFinanceJSON
    }
  }])
