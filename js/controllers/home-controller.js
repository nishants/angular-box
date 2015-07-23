(function () {
  'use strict';

  crawler.app.controller('HomeController', function ($scope, homeService, $location) {
    $scope.items = [
      {
        id: "1",
        name: "One",
        description: "first one",
        date: new Date(),
      },
      {
        id: "2",
        name: "Two",
        description: "second one",
        date: new Date(),
      },
      {
        id: "3",
        name: "Three",
        description: "third one",
        date: new Date(),
      }
    ];

  });

}).call(this);
