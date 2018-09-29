import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//处理模版
gulp.task('pages', ()=>{
  //gulp.src是打开这个文件，**表示各层嵌套文件
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
})
