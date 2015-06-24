(function(){

    'use strict';

    var module = angular.module('app.heroProfile', []);

    module.config(function($stateProvider) {

        $stateProvider
            .state('heroProfile', {
                url: '/heroProfile',
                templateUrl: 'app/heroProfile/heroProfile.html',
                controller: 'HeroProfileCtrl as heroProfileCtrl'
            });
    });

    module.controller('HeroProfileCtrl', function($scope) {
        var ctrl = this;

        console.log('HeroProfileCtrl');
    });

    //end of module
})();
