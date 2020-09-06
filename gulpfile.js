const gulp = require('gulp');
const { src, dest } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function css() {
    return src('less/**/*.less') // 1. Location of source files (.less)
      .pipe(less()) // 2. Compile the less to CSS
      .pipe(minifyCSS()) // 3. Minify the CSS
      .pipe(dest('css')) // 4. Write the CSS file out to a specific destination
      .pipe(browserSync.stream())
    }
    exports.default = () => (
        gulp.src('src/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images'))
    );

    function watch(){
     browserSync.init({
       server: {
         baseDir: './',
       }
     });
     gulp.watch('./less/**/*.less', css);
     gulp.watch('./*.html').on('change', browserSync.reload)
    }
    
    exports.watch = watch;
    