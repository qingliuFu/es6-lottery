import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server/public'))
	//.pipe(gulpif(args.watch,livereload()))一般项目中是需要写的，但是我们这里只是学习ES6所以只拷贝不再监听
})