'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // is for simplify and load all the gulp-plugin name and charge it in $
var browserSync = require('browser-sync').create(); //
var wiredep = require('wiredep').stream; //
var series = require('stream-series');
