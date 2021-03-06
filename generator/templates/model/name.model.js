(function(){

    'use strict';

    var module = angular.module('<%= moduleNamespace %>', []);

	module.factory('<%= _.capitalize(name) %>Model', function($resource, CONFIG) {
        return function(){

            var urlParams = {
				_id: '@id'
			};

			var actions = {};

			/*
				Examples:
				GET all: api/v1/<%= name %>
				GET:     api/v1/<%= name %>/1234
				POST:    api/v1/<%= name %>
				PUT:     api/v1/<%= name %>/1234
				DEL:     api/v1/<%= name %>/1234

			 */
            return $resource(CONFIG.api + '/<%= name %>/:_id', urlParams, actions);

        };
    });

	module.service('<%= _.capitalize(name) %>Manager', function(<%= _.capitalize(name) %>Model) {
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
			var promise = <%= _.capitalize(name) %>Model.query({}).$promise;

			var success = function( response ){

				console.log('<%= _.capitalize(name) %>\'s listed: ', response)
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

			var promise = <%= _.capitalize(name) %>Model.get({id:id}).$promise;

			var success = function( response ){

				console.log('<%= _.capitalize(name) %> '+ id +' listed: ', response)
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

			var promise = <%= _.capitalize(name) %>Model.put({id:id}, data ).$promise;

			var success = function( response ){

				console.log('<%= _.capitalize(name) %> '+ id +' updated: ', response)
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

			var promise = <%= _.capitalize(name) %>Model.delete({id:modelId}).$promise;

			var success = function( response ){

				console.log('<%= _.capitalize(name) %> '+ modelId +' deleted: ', response)
			};

			promise.then(success, localFail);

			return promise;

		}


	});

    //end of module
})();
