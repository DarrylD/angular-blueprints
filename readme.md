angular-blueprints
============

## Why
Wanted to have the power of yeoman/slush but, on a per project basis. Now opposed to having global generators and somehow sharing them across a team (which would be a pain to handle) edit them locally. Just an experiment to keep our stack simple.

## Setup
`npm install && bower install`

## Running
- `gulp serve` will run the app and launch a browser window
- `gulp update` will run the app without launching a browser window

## Add app module or component
`gulp add`

This will ask you two questions before creating your module/component
- What type? (module, directive, model, etc...)
- Name of the component in camelCase(ex: hoverCraft)

For example if you choose a `module` (which is treated differently than the rest of the options) and named it `heroProfile` you will have a new module called 'ProfilePage' and will be located in `src/app/heroProfile`

If you choose a component like a `model` and named it `ironManClone` you will have a new model called 'TalkingCamelModel' and will be located in `src/components/models/ironManClone`

## Examples of a module
In this case we named it 'heroProfile'

JS
```
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

```

HTML
```
    <div class="hero-profile">
    	This is a heroProfile template
    </div>

```

LESS
```
    .hero-profile{

    }

```

## Example of a service
In this case we named it 'backgroundCheck'

JS
```
    (function(){

        'use strict';

        var module = angular.module('app.service.backgroundCheck', []);

        module.service('BackgroundCheckService', function() {
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

```

## Examples of a directive
In this case we named it 'fancyComputer'

JS
```
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

```

HTML
```
    <div class="fancy-computer">
    	This is a fancyComputer directive
    </div>

```

LESS
```
    .fancy-computer{

    }

```

## Examples of a model
In this case we named it 'avenger'

JS
```
    (function(){

        'use strict';

        var module = angular.module('app.model.avenger', []);

    	module.factory('AvengerModel', function($resource, CONFIG) {
            return function(){

                var urlParams = {
    				_id: '@id'
    			};

    			var actions = {};

    			/*
    				Examples:
    				GET all: api/v1/avenger
    				GET:     api/v1/avenger/1234
    				POST:    api/v1/avenger
    				PUT:     api/v1/avenger/1234
    				DEL:     api/v1/avenger/1234

    			 */
                return $resource(CONFIG.api + '/avenger/:_id', urlParams, actions);

            };
        });

    	module.service('AvengerManager', function(AvengerModel) {
    		var service = this;

    		var localFail = function(error){
    			console.error(error);
    		}

    		//Note: this is a little wet, but keeping it that way to save time.
    		/**
    		 * list of all the models
    		 * @return {promise} resolves to collection
    		 */
    		service.list = function( ){
    			var promise = AvengerModel.query({}).$promise;

    			var success = function( response ){

    				console.log('Avenger\'s listed: ', response)
    			};

    			promise.then(success, localFail);

    			return promise;
    		}

    		//TODO add crud methods
    		/**
    		 * get a specific model based on id
    		 * @param  {str} id
    		 * @return {promise} resolves to specified model
    		 */
    		service.get = function(id){
    			if(!id || typeof id !== 'string'){
    				console.error('No id or wrong format');
    				return;
    			}

    			var promise = AvengerModel.get({id:id}).$promise;

    			var success = function( response ){

    				console.log('Avenger '+ id +' listed: ', response)
    			};

    			promise.then(success, localFail);

    			return promise;

    		}


    		/**
    		 * edit a model
    		 * @param  {obj} data will be the obj with updated vals
    		 * @return {promise} resolves to updated model
    		 */
    		service.edit = function(data){

    			if(!id || typeof id !== 'object'){
    				console.error('No id or wrong format');
    				return;
    			}

    			var promise = AvengerModel.put({id:id}, data ).$promise;

    			var success = function( response ){

    				console.log('Avenger '+ id +' updated: ', response)
    			};

    			promise.then(success, localFail);

    			return promise;

    		}

    		/**
    		 * delete a model
    		 * @param  {str | obj} model must be the id of the model of the model itself
    		 * @return {promise} resolves to emptiness?? o_O
    		 */
    		service.delete = function(model){
    			//should only be a str or obj
    			if(!model || typeof model === 'array' || typeof model === 'number'){
    				console.error('No id or wrong format');
    				return;
    			}

    			var modelId;

    			if(typeof model === 'string'){
    				modelId = id;
    			}

    			//this may need to change depending on the UID name
    			if(typeof model === 'object'){
    				modelId = model.id;
    			}

    			var promise = AvengerModel.delete({id:modelId}).$promise;

    			var success = function( response ){

    				console.log('Avenger '+ modelId +' deleted: ', response)
    			};

    			promise.then(success, localFail);

    			return promise;

    		}


    	});

        //end of module
    })();

```

## Examples of a filter
In this case we named it 'processReport'

JS
```
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

```

## Acknowledgments

- [Nathan](https://github.com/nhogge): Awesome generator idea;
- [Soundcloud](http://www.soundcloud.com): Only way I was able to sit down and do this...;
