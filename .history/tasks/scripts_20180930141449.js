import gulp from 'gulp';
import gulpif from 'gulp-if';
// 处理文件拼接
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
// 文件重命名Give vinyl files arbitrary chunk names.
import named from 'vinyl-named';
// 热更新
import livereload from 'gulp-livereload';
// 处理文件信息流
import plumber from 'gulp-plumber';
// 文件重命名
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
// 命令行输出
import { log, colors } from 'gulp-util';
// 命令行参数解析
import args from './util/args';

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      // 处理错误逻辑
      errorHandle: function () {

      }
    }))
    //重命名
    .pipe(named())
    //进行编译，第三个参数处理错误情况
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    //编译完放在哪里，因为server要拿到最新的js,才能跑起来
    .pipe(gulp.dest('server/public/js'))
    //备份下刚刚的文件，重命名
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    //压缩
    .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
    //这时候有压缩的和未压缩的了
    .pipe(gulp.dest('server/public/js'))
    //判断，如果有watch，就热更新
    .pipe(gulpif(args.watch, livereload()))
})
