(function(){

    'use strict';

    var module = angular.module('app.filter.processReport', []);

    /**
    * Some docs on this filter
    */
    module.service('ProcessReportFilter', function() {

        return function (val) {

            var doSomethingAwesome = function(){
                return val;
            };

            return doSomethingAwesome();
        };

    });

    //end of module
})();
