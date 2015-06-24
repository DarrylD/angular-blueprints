(function(){

    'use strict';

    var module = angular.module('app.model.avenger.mock', ['ngMock']);

    module.run(function($httpBackend) {

    	var mockdata = {
    		"avengerId": 1234,
    		"name": "avenger"
    	};

    	$httpBackend.when('GET', 'api/v1/avenger/1234').respond(mockdata);

    });

    //end of module
})();
