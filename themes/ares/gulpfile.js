const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function compileSass() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./source/css'));
}

function watchFiles() {
    gulp.watch(['./source/scss/**/*.scss'], compileSass);
}

exports.sass = compileSass;
exports.watch = watchFiles;
exports.default = gulp.series(compileSass, watchFiles);