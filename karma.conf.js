'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters: ['progress', 'osx'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-junit-reporter',
        'karma-jasmine'
    ]
  });
};
