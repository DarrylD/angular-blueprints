(function(){

    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'picardy.fontawesome',
        'ui.utils',

        //dynamic modules/components made from 'gulp gen'
        'app.config',
        'app.modules',
        'app.components'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');

    });

    //eom
})();
