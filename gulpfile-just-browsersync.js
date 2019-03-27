const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task("serve", gulp.series(() => {
    browserSync.init({
      server: "./"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
  }));