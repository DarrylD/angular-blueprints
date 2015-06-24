describe("<%= moduleNamespace %>.directive.spec", function() {

	var $compile, $rootScope, $httpBackend;

	beforeEach(module('templates'));
	beforeEach(module('<%= moduleNamespace %>.mock'));
	beforeEach(module('<%= moduleNamespace %>.directive'));

	beforeEach(inject(function($injector){

		$compile = $injector.get('$compile');
		$rootScope = $injector.get('$rootScope');
		$httpBackend = $injector.get('$httpBackend');

	}));

	it('is a new test', function() {

		$rootScope.fakeThing = {};
		var element = $compile("<<%= name %> thing='fakeThing' display='string'></<%= name %>>")($rootScope);
		$rootScope.$digest();
		$httpBackend.flush();

		expect(element.html()).toContain("this is a test");

	});

});
