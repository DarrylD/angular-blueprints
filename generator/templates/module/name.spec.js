describe("<%= moduleNamespace %>.controller.spec", function() {

	var $httpBackend, $controller;
	
	beforeEach(module('templates'));
	beforeEach(module('<%= moduleNamespace %>.controller'));

	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		$controller = $injector.get('$controller');
	}));

	it('is a new test', function() {

		var <%= name %> = $controller('<%= name %>Controller', {});
		expect(<%= name %>.test).toBe('this is a test');

	});

});
