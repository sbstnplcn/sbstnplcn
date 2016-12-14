var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');

var paths = {
    www:    './src/',
    html:   './src/**/*.html',
    js: [   './src/js/components/**/**/*.md.js',
            './src/js/components/**/**/*.js',
            './src/js/services/services.md.js',
            './src/js/services/*.js',
            './src/js/app.js'
    ],
    libs: [ './src/libs/js/angular.min.js',
            './src/libs/js/angular-animate.min.js',
            './src/libs/js/angular-sanitize.min.js']
};

gulp.task('default', ['babel', 'libs']);


gulp.task("babel", function() {
    return gulp.src(paths.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.www));
});

gulp.task("libs", function() {
    return gulp.src(paths.libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(paths.www));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['babel']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('serve:before', ['default', 'watch']);
