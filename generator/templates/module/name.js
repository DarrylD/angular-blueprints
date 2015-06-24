(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>', []);

    module.config(function($stateProvider) {

        $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                templateUrl: 'app/<%= name %>/<%= name %>.html',
                controller: '<%= _.capitalize(name) %>Ctrl as <%= name %>Ctrl'
            });
    });

    module.controller('<%= _.capitalize(name) %>Ctrl', function($scope) {
        var ctrl = this;

        console.log('<%= _.capitalize(name) %>Ctrl');
    });

    //end of module
})();
