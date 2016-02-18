var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite');


gulp.task('svg', function () {
  return gulp.src('img/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.',
          dimensions: '%s',
          sprite: 'img/svg-sprite.svg',
          example: false,
          render: {
            scss: {
              dest: 'scss/_svg-sprite.scss'
            }
          }
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .pipe(gulp.dest('./'));
});
