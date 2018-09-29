import gulp from 'gulp';
import gulpif from 'gulp-if';
//一个能启动服务器端包
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb)=>{
  if(!args.watch) return cb();

  //创建一个服务器
  var server = liveserver.new(['--harmony','server/bin/www']);
  //启动服务器
  server.start();

  //处理前端资源文件——当js,ejs文件发生改变的时候，浏览器自动更新，热更新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
    //通知服务器
    server.notify.apply(server,[file]);
  })

  //监听需要重启服务的文件，routes下服务器的脚本文件，做接口用的，app.js是服务启动入口文件
  gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
    server.start.bind(server)();
  })
})
