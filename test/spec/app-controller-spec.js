describe("AppController", function () {

  var
      controller,
      $scope,
      $location,
      appService,
      items = {
        id: "1",
        name: "One",
        description: "first one",
        date: "00:58:43 - 2015-07-27",
      },
      appService = {
        getAllItems: function (succes, err) {
          succes(items);
        }
      },
      setupAngular = function () {
        module('app');
        inject(function (_$rootScope_, _$controller_, _$location_) {
          $scope = _$rootScope_.$new();
          $location = _$location_;

          spyOn($location, "url")

          controller = _$controller_('AppController', {$scope: $scope, $location: $location, appService: appService});
        });
      };

  // Tests ----------------------
  beforeEach(setupAngular);

  describe('$scope.init', function () {
    it('fetches static data and redirects to home', function () {
      $scope.init("redirectURL");

      expect($location.url).toHaveBeenCalledWith("redirectURL");
      expect($scope.items).toBe(items);
    });
  });
});