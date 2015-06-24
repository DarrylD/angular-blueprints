(function(){

    'use strict';

    var module = angular.module('app.directive.fancyComputer', []);

    module.directive('fancyComputer', function(){
        return {
            restrict: 'E',
            templateUrl: 'components/fancyComputer/fancyComputer.html',
            controller: 'FancyComputerCtrl as fancyComputerCtrl'
        };
    });

    module.controller('FancyComputerCtrl', function ($scope) {
        var ctrl = this;

        $scope.date = new Date();
    });

    //eom
})();
