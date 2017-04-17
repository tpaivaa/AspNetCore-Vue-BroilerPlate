/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var webpack = require('webpack-stream');
var elixir = require('laravel-elixir');
elixir.assetsPath = '/wwwroot/';
// Run webpack and let it does its magic.
gulp.task('webpack', function(){
  return gulp.src('wwwroot/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('wwwroot/dist/'))
});
// Configure watch to track changes on VUE files.
gulp.task('watch', function () {
    gulp.watch(
        ['wwwroot/components/*.vue', 'wwwroot/services/**/*.js', 'wwwroot/*.vue', 'wwwroot/*.js', 'wwwroot/stylesheets/*.scss'],
        ['webpack']);
});
