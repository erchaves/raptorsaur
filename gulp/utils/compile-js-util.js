var PATHS = require('../paths');

var closureCompiler = require('gulp-closure-compiler');
var debug = require('gulp-debug');
var sort = require('gulp-sort');
var path = require('path');
var livereload = require('gulp-livereload');

module.exports = function(gulp, src, fileName) {
  return gulp.src(src)
    .pipe(sort())
    .pipe(debug({'title': 'compile-js'}))
    .pipe(closureCompiler({
      compilerPath: path.join(PATHS.NPM, 'google-closure-compiler', 'compiler.jar'),
      compilerFlags: {
        // 'compilation_level': 'ADVANCED_OPTIMIZATIONS',
        'language_in': 'ECMASCRIPT6_STRICT',
        'language_out': 'ECMASCRIPT5_STRICT',
        'generate_exports': true,
        'output_wrapper': '(function(){%output%})();'
      },
      fileName: fileName
    }))
    .pipe(gulp.dest(PATHS.DIST.JS))
    .pipe(livereload());
};
