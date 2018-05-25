import yargs from 'yargs';

const args=yargs

.option('production',{
	boolean:true,
	default:false,
	describle:'min all scripts'
})

.option('watch',{
	boolean:true,
	default:false,
	describle:'watch all files'
})

.option('verbose',{
	boolean:true,
	default:false,
	describle:'log'
})

.option('sourcemaps',{
	describle:'force the creation of sourcemaps'
})

.option('ports',{
	string:true,
	default:8080,
	describle:'server port'
})

  .argv

export default args;