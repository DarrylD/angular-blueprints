(function(){
	'use strict';

	var gulp = require('gulp');
	var path = require('path');
	var fs = require('fs');
	var inquirer  = require('inquirer');
	var rename = require('gulp-rename');
	var conflict = require('gulp-conflict');
	var template = require('gulp-template');
	var replace = require('gulp-replace');
	var debug = require('gulp-debug');


	/*** CONFIG SETTINGS ***/
	var appRoot = path.join(process.cwd(), 'src/');
	var templateRoot = path.join(__dirname, 'templates');

	//lists the sub-dirs in a selected dir
	function directories(parentPath) {
		return fs.readdirSync(parentPath).filter(function(file) {
			return fs.statSync(path.join(parentPath, file)).isDirectory();
		});
	}

	module.exports = function ( done ) {
		inquirer.prompt([{
			type: 'list',
			name: 'componentType',
			message: 'What do you want to create?',
			choices: function(answers) {
				return [
					'module',
					new inquirer.Separator(),
					'service',
					'directive',
					'model',
					'filter'
				]
			}
		},
		{
			type: 'input',
			name: 'name',
			default: 'componentPlaceholder',
			message: function(answers){
				console.log(answers)
				//adding the name for some confirmation
				return 'What will be the name (camelCased) of this '+ answers.componentType +'?'
			}
		}],
		function(answers) {

			//used to we can namespace in the templates
			//if we have a module we want to name it differently than components
			if(answers.componentType === 'module'){
				answers.moduleNamespace = 'app.' + answers.name;
			}else{
				answers.moduleNamespace = 'app.' + answers.componentType + '.' + answers.name;
			}

			//making a slug for the css
			function camelCaseToDash( myStr ) {
			    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
			}

			answers.slug = camelCaseToDash( answers.name );

			var templatesPath = path.join(__dirname+'', 'templates', answers.componentType, '**/*');

			console.log(templatesPath);
			console.log(answers);

			//we need to add app since modules are in the app folder
			var destination;

			if(answers.componentType === 'module'){
				//example src/app/video
				destination = path.join(appRoot+'/app', answers.name);

			}else{
				//example src/components/directives/videoPlayer
				//also adding a "s" since everything is plural
				destination = path.join(appRoot+'/components/'+answers.componentType+'s', answers.name);

			}

			//where we will grab a file from to add the module name
			var moduleNameLocation;

			//where we'll place it...
			var moduleNameDest;

			if(answers.componentType === 'module'){
				moduleNameLocation = [appRoot + 'app/_modules.js'];
				moduleNameDest = appRoot + '/app';

			}else{
				moduleNameLocation = [appRoot + 'components/_components.js'];
				moduleNameDest = appRoot + 'components';

			}

			//why does this look so ugly? because we want the output to be natrual
			//look at the start of the array, line break and add 2 tabs (8 spaces) so it can look "natrual"
			//also keeping a trailing comma... leading commas would rule in this situation
			var replacementModuleName = '[\n        \''+ answers.moduleNamespace +'\',';

			console.log('repl: ' + replacementModuleName)
			console.log('loc: ' + moduleNameLocation)

			gulp.src( moduleNameLocation )
				.pipe(replace('[', replacementModuleName))
				// .pipe(debug({title: 'unicorn:'}))
				.pipe(gulp.dest( moduleNameDest ));

			gulp.src(templatesPath)
				.pipe(template(answers))
				.pipe(rename(function (file){
					//will change all the file names that have 'name' in it to the name
					//used in the answers
					file.basename = file.basename.replace('name', answers.name);
				}))
				.pipe(conflict(destination))
				.pipe(gulp.dest(destination))

				.on('finish', function() {
					done();
				});

		});

	};


})();
