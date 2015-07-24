describe("Landing page : AppController", function() {

  beforeEach(module('app'));

  var controller,
      scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('AppController', {
      $scope: scope
    });
  }));

  it('says hello world!', function () {
    expect(scope.items).toEqual("Hello world!");
  });

});
