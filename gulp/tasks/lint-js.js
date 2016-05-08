var PATHS = require('../paths');
var eslint = require('gulp-eslint');
var debug = require('gulp-debug');
var path = require('path');

module.exports = function(gulp) {
  return function(callback) {
    var thirdPartyJs = [
      '!' + path.join(PATHS.SRC.JS, 'closure-library', '**', '*.js')
    ];

    gulp.src(PATHS.JS_SHARED
      .concat(thirdPartyJs))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.results(function (results) {
        // Called once for all ESLint results.
        console.log('Total Results: ' + results.length);
        console.log('Total Warnings: ' + results.warningCount);
        console.log('Total Errors: ' + results.errorCount);
      }))
      .on('finish', callback);
  };
};
