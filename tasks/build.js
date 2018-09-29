import gulp from 'gulp';
//确保任务关联，顺序
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean','css','pages','scripts',['browser','serve']));