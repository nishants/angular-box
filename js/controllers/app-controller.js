(function() {
	'use strict';

	crawler.app.controller('AppController', function($scope, homeService, $location) {
		$scope.pages  = [];
		
		var onSuccess = function(response){
			$scope.pages = response;	
		}

		var onFailure = function(response){
			console.error("Failed to fetch pages : ")
		}

	    var loadPages = function() {
	        crawlerService.getPages().then(onSuccess, onFailure)
	    };

	    $scope.init = function(rediretUrl){
	    	setTimeout(
	    		function(){
	    			$location.url(rediretUrl);
	    		},
	    		1000
	    	);
	    };

	    $scope.loader = {
	    	visible: function(){
	    		return true;
	    	}
	    };
	    
	});
	
}).call(this);
