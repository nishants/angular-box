
(function() {
  "use strict";
  
  crawler.app.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('home', {
        url: "/home",
        views: {
          default: {
            templateUrl: "pages/homepage.html",
            controller: "HomeController"
          }
        }
      });
    }
  ]);

}).call(this);
