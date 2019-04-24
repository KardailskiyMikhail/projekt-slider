var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var nano = require('cssnano');
var autoprefixer = require('autoprefixer');
var terser = require('gulp-terser');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 5 version']}), nano()]))
        .pipe(gulp.dest('.dist'));
});

})
gulp.task('terser', function () {
    return gulp.src('./src/*.js')
        .pipe(terser())
        .pipe(gulp.dest('.dist'));
})

gulp.task('watch',function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass')); //watch less
    gulp.watch('./src/**/*.js', gulp.series('terser')); //watch js
});
gulp.task('default', gulp.parallel('sass', 'terser'));