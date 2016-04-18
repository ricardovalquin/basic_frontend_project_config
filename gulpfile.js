'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // is for simplify and load all the gulp-plugin name and charge it in $
var browserSync = require('browser-sync').create(); //
var wiredep = require('wiredep').stream; //
var series = require('stream-series');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var shorthand = require('gulp-shorthand');
var cssmin = require('gulp-cssmin');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var plugins = gulpLoadPlugins();

gulp.task('injectAppFiles', function(){
    var target = gulp.src('./app/index.html');
    var sources = gulp.src(['./app/styles/default.css'], {read: false});

    return target.pipe($.inject(sources), {relative: true})
        .pipe(gulp.dest('./app'));
});

gulp.task('styles', function(){
    plumber
    sourcemaps
    gulp-sass
    shorthand
    autoprefixer
    cssmin
    browserSync

});

gulp.task('serve', function(){

});
