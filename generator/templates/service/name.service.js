(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>', []);

    module.service('<%= _.capitalize(name) %>Service', function() {
        var service = this;
		var _private = {};

		_private.moreStuff = function(){
			console.log('More stuff completed');
		};

		service.doStuff = function(){
			console.log('Stuff completed!');

			_private.moreStuff();
		};

    });

    //end of module
})();
