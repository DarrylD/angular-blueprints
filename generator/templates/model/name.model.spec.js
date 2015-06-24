describe("<%= moduleNamespace %>.spec", function() {

	var $httpBackend, <%= name %>Manager;

	beforeEach(module('templates'));
	beforeEach(module('<%= moduleNamespace %>Model'));
	beforeEach(module('<%= moduleNamespace %>.mock'));

	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		<%= name %>Manager = $injector.get('<%= name %>Manager');
	}));

	it('loads the mock data', function() {

		$httpBackend.flush();
		
		expect(<%= name %>Manager.test.name).toBe('bob');

	});

});
