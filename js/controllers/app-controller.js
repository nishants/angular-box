(function () {
  'use strict';

  crawler.app.controller('AppController', ["$scope", "$location", "appService", function ($scope, $location, appService) {
    var
        onGetItems = function (rediretUrl) {
          return function (items) {
            $scope.items = items;    //a available to whole app(as every other scope is a child
            $location.url(rediretUrl);
          };
        },

        onFailure = function (response) {
          console.error("Failed to fetch pages : ")
        };

    $scope.init = function (rediretUrl) {
      appService.getAllItems(onGetItems(rediretUrl), onFailure);
    };

    $scope.loader = {
      visible: function () {
        return true;
      }
    };

  }]);

}).call(this);
