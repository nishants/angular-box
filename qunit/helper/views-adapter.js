(function () {
  "use strict";
  // changes relative url for fetching html templates
  var relativePathFor = function(view){
    return "../" + view.template;
  }

  crawler.app.views.forEach(function(view){
    view.template = relativePathFor(view);
  });

}).call(this);
