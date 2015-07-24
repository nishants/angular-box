(function () {
  'use strict';

  crawler.app.controller('AppController', function ($scope, homeService, $location) {
    var
        onGetItems = function (rediretUrl) {
          return function(items){
            $scope.items = items;    //a available to whole app(as every other scope is a child
            $location.url(rediretUrl);
          };
        },

        onFailure = function (response) {
          console.error("Failed to fetch pages : ")
        };

    $scope.init = function (rediretUrl) {
      homeService.getAllItems(onGetItems(rediretUrl), onFailure);
    };

    $scope.loader = {
      visible: function () {
        return true;
      }
    };

  });

}).call(this);
