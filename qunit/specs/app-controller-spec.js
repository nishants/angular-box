(function () {
  "use strict"

  var pageHtml =
      '<div ng-controller="AppController" > </div>';

  QUnit.module("App Controller", {
    setup: function () {
      angular.element("#qunit-fixture").append(pageHtml);
    }
  });

  QUnit.test("Should do something", function (assert) {
    assert.ok(true, "should do this.");
  });

}).call(this);