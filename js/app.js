(function () {
  'use strict';
  window.crawler = {};
  crawler.app = angular.module("crawler-app", ['ui.router']);

  crawler.app.config(
      function () {
        console.log("started app, set config here");
      }
  );

}).call(this);
