import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//作为启动服务器的包，启动一个脚本作为服务器
import args from './util/args';

gulp.task('serve',(cb)=>{
	if (!args.watch) return cb();//如果不是处于监听状态下的，就返回回调函数

	var server=liveserver.new(['--harmony','server/bin/www']);//如果是出于监听状态，就创建一个服务器
	server.start();//启动服务器

	//当文件改变时，要自动刷新
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})

	//当需要重启服务的文件
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)();
	})
})