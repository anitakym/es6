import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//每次生成新的文件时，要把原目录里面的文件清空掉
gulp.task('clean', ()=>{
  return del(['server/public', 'server/views'])
})
