{
	let a,b;
	function f(){
		return [1,2,3,4,5];
	}
	[a,,...b]=f();
	console.log(a,b);
}
{
	let o={p:42,q:true};
	let {p,q}=o;
	console.log(p,q);
}
{
	let {a=10,b=5}={a:3};
	console.log(a,b);
}
{
	let a,b;
	({a,b}={a:1,b:2});
	console.log(a,b);
}
{
	let metaData={
		title:"abc",
		test:[
		{
			title:'test',
			desc:"description"
		}]
	};
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle);
}