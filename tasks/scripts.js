import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp里的if判断
import concat from 'gulp-concat';//合并js文件
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';//自动更新
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';//这个包是用来压缩js
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task("scripts",()=>{
	return gulp.src(['app/js/index.js'])
	.pipe(plumber({
		errorHandle:function(){

		}
	}))//处理脚本时，处理常规的错误逻辑，集中处理错误
	.pipe(named())//重命名
	.pipe(gulpWebpack({
		module:{
			loaders:[{
				test:/\.js$/,
				loader:'babel-loader'
			}]
		}
	}),null,(err,stats)=>{
		log(`Finished '${colors.cyan('scripts')}`,stats.toString({
			chunks:false
		}))
	})//对脚本的编译，借用Webpack的一个函数，如果遇到.js的文件，就用babel这个loader来处理
	.pipe(gulp.dest('server/public/js'))//编译后存放的路径
	.pipe(rename({
		basename:'cp',
		extname:'.min.js'
	}))//使用重命名的方法来将刚才生成的文件复制了一份
	.pipe(uglify({
		compress:{properties:false},
		output:{'quote_keys':true}
	}))//对上面复制的文件进行了压缩
	.pipe(gulp.dest('server/public/js'))//再将这个压缩完的文件存在路径中
	.pipe(gulpif(args.watch,livereload()))//监听这个js文件，如果有watch选项，就执行热刷新
})