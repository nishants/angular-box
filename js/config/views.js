(function () {
  "use strict";

  // declare routes here
  var routes = [
    {
      state: "home",
      template: "pages/homepage.html",
      controller: "HomeController"
    }
  ];

  crawler.app.views = routes;
}).call(this);
