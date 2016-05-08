var compiler = require('../utils/compile-js-util');

module.exports = function(gulp) {
  return function() {
    return compiler(gulp, PATHS.JS_SOURCES_SITE, 'site.min.js');
  };
};
