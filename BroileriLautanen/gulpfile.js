/// <binding AfterBuild='minify' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var bundle = require('gulp-bundle-assets');

gulp.task('minify', function () {

    // Nice to know: Gulp crashes on VUE shorthands.
    return gulp.src("wwwroot/js/*.js")
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest("wwwroot/lib/_app"));

});

gulp.task('bundle', function () {

    return gulp.src('./bundle.config.js')
        .pipe(bundle().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('wwwroot/lib/_app'));

});
