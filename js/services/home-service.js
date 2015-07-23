(function() {
	'use strict';

	crawler.app.service('homeService', function($http) {
	    return {
	    	getAllItems: function(link, onSuccess, onError){
					$http.get('/items').
							success(function(data, status, headers, config) {
								// this callback will be called asynchronously
								onSuccess(data);
							}).
							error(function(data, status, headers, config) {
								// called asynchronously if an error occurs
								// or server returns response with an error status.
								onError(data);
							});
	    	}

	    };
	});

}).call(this);