const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
watch = require('gulp-watch');

gulp.task('js', function(){
    return watch('js/*.js', function () {
        gulp.src('js/*.js')
            .pipe(sourcemaps.init())
            .pipe(concat('js.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(''))
    });
});


gulp.task('default', ['js']);