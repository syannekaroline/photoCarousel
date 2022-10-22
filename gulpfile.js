"use strict"

const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
sass.compiler = require('node-sass')

gulp.task('default', watchFunction)
gulp.task('sass', compileSass)

function compileSass(){
    return gulp
        .src('./*.scss')
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))

}

function watchFunction(){
    gulp.watch('./*.scss', compileSass) // compileSass é uma callback
}

