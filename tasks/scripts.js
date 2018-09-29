import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts', ()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function () {

      }
    }))
    //重命名
    .pipe(named())
    //进行编译，第三个参数处理错误情况
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks: false
      }))
    })
    //编译完放在哪里，因为server要拿到最新的js,才能跑起来
    .pipe(gulp.dest('server/public/js'))
    //备份下刚刚的文件，重命名
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    //压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    //这时候有压缩的和未压缩的了
    .pipe(gulp.dest('server/public/js'))
    //判断，如果有watch，就热更新
    .pipe(gulpif(args.watch, livereload()))
})
