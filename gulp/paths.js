module.exports = PATHS = {
  BOWER: './bower_components/',
  BUILD: './build',
  NPM: './node_modules/',
  DIST: {
    ROOT: './dist/',
    CSS: './dist/css/',
    JS: './dist/js/'
  },
  SRC: {
    ROOT: './source/',
    SCSS: './source/sass/',
    IMG: './source/img/',
    JS: './source/js/'
  },
  TMP: './.tmp/'
};

PATHS.CSS_SOURCES = [
  PATHS.SRC.SCSS + '/**/*.scss'
];

PATHS.JS_SHARED = [
  PATHS.SRC.JS + '**/*.js',
  '!' + PATHS.SRC.JS + 'deps.js',
  '!' + PATHS.SRC.JS + 'google-closure-library/**/*.js',
  '!' + PATHS.SRC.JS + 'externs/**/*.js'
];

PATHS.JS_SITE = PATHS.SRC.JS + 'site/**/*.js';

//For now, the site is the same as the shared js
PATHS.JS_SOURCES_SITE = PATHS.JS_SHARED;