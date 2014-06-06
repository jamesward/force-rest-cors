angular.module("myApp", ["ui.bootstrap"])
  .controller("ForceJson", function($scope,  $http) {

    var baseurl = "https://sfdc-cors.herokuapp.com/services/data/v30.0/query/";

    $scope.doQuery = function() {
      var url = baseurl + "?q=" + $scope.query;
      $http.get(url, {headers: {'Authorization': 'Bearer ' + $scope.authToken}})
        .success(function(data) {
          $scope.response = JSON.stringify(data, undefined, 2);
        });
    };

  });
