describe("app.directive.fancyComputer.directive.spec", function() {

	var $compile, $rootScope, $httpBackend;

	beforeEach(module('templates'));
	beforeEach(module('app.directive.fancyComputer.mock'));
	beforeEach(module('app.directive.fancyComputer.directive'));

	beforeEach(inject(function($injector){

		$compile = $injector.get('$compile');
		$rootScope = $injector.get('$rootScope');
		$httpBackend = $injector.get('$httpBackend');

	}));

	it('is a new test', function() {

		$rootScope.fakeThing = {};
		var element = $compile("<fancyComputer thing='fakeThing' display='string'></fancyComputer>")($rootScope);
		$rootScope.$digest();
		$httpBackend.flush();

		expect(element.html()).toContain("this is a test");

	});

});
