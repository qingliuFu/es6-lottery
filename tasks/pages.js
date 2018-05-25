import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')//使用src函数打开文件，**/*表示这个目录下所有的ejs文件
	.pipe(gulp.dest('server'))//将模板文件原封不动的拷贝到server目录里
	.pipe(gulpif(args.watch,livereload()))

})