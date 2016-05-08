var PATHS = require('../paths');
var livereload = require('gulp-livereload');

module.exports = function(gulp) {
  return function() {
    livereload.listen({start:true});
    gulp.watch([PATHS.CSS_SOURCES], ['sass', 'lint-scss']);
    gulp.watch([PATHS.JS_SOURCES_SITE], ['compile-js', 'lint-js']);
  };
};
