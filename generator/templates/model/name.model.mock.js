(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>.mock', ['ngMock']);

    module.run(function($httpBackend) {

    	var mockdata = {
    		"<%= name %>Id": 1234,
    		"name": "<%= name %>"
    	};

    	$httpBackend.when('GET', 'api/v1/<%= name %>/1234').respond(mockdata);

    });

    //end of module
})();
