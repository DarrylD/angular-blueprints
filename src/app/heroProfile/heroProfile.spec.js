describe("app.heroProfile.controller.spec", function() {

	var $httpBackend, $controller;
	
	beforeEach(module('templates'));
	beforeEach(module('app.heroProfile.controller'));

	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		$controller = $injector.get('$controller');
	}));

	it('is a new test', function() {

		var heroProfile = $controller('heroProfileController', {});
		expect(heroProfile.test).toBe('this is a test');

	});

});
