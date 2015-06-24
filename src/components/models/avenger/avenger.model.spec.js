describe("app.model.avenger.spec", function() {

	var $httpBackend, avengerManager;

	beforeEach(module('templates'));
	beforeEach(module('app.model.avengerModel'));
	beforeEach(module('app.model.avenger.mock'));

	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		avengerManager = $injector.get('avengerManager');
	}));

	it('loads the mock data', function() {

		$httpBackend.flush();
		
		expect(avengerManager.test.name).toBe('bob');

	});

});
