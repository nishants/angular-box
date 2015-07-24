(function () {
  'use strict';

  // static data, shared across the app (caches as needed)
  crawler.app.service('appService', function ($http) {
    var response = {
      data: [
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
      ]
    };

    return {
      getAllItems: function (onSuccess, onError) {
        //$http.get('/items').
        //		success(function(data, status, headers, config) {
        //			// this callback will be called asynchronously
        //			onSuccess(data);
        //		}).
        //		error(function(data, status, headers, config) {
        //			// called asynchronously if an error occurs
        //			// or server returns response with an error status.
        //			onError(data);
        //		});
        onSuccess(response.data);
      }
    };
  });

}).call(this);