(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>', []);

    module.directive('<%= name %>', function(){
        return {
            restrict: 'E',
            templateUrl: 'components/<%= name %>/<%= name %>.html',
            controller: '<%= _.capitalize(name) %>Ctrl as <%= name %>Ctrl'
        };
    });

    module.controller('<%= _.capitalize(name) %>Ctrl', function ($scope) {
        var ctrl = this;

        $scope.date = new Date();
    });

    //eom
})();
