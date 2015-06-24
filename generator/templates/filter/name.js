(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>', []);

    /**
    * Some docs on this filter
    */
    module.service('<%= _.capitalize(name) %>Filter', function() {

        return function (val) {

            var doSOmething = function(){
                return val;
            };

            return doSOmething();
        };

    });

    //end of module
})();
