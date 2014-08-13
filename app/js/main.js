angular.module("myApp", ["ui.bootstrap", "forceng"])
  .run(function ($window, force) {

    force.init({
      appId: '3MVG9xOCXq4ID1uE5sILNJHk06inAqUxj9yjE.FWXLLbWBDt9RNgCnnQF4twGikbdC.nzjvVT9mumyYBoQzPw',
      proxyURL: 'https://sfdc-cors.herokuapp.com'
    });

  })
  .controller("ForceQuery", function($scope,  $http, force) {

    $scope.doQuery = function() {
      if (force.isLoggedIn()) {
        force.query($scope.query).then(
          function (data) {
            $scope.response = JSON.stringify(data, undefined, 2);
          },
          function () {
            alert("An error has occurred. See console for details.");
          });
      }
      else {
        alert("You need to login first");
      }
    };

  })
  .controller("ForceLogin", function($scope,  $http, force) {

    $scope.login = function() {
      force.login().then(
        function () {
          console.log('Salesforce login succeeded');
        },
        function () {
          alert('Salesforce login failed');
        });
    };

  });