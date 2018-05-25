// {
// 	let readonly=function(target,name,descriptor){
// 		if(name==="time"){
// 			descriptor.writable=false;
// 			return descriptor;
// 		}
// 	};

// 	@readonly
// 	class Test{
	
// 		// time(){
// 		// 	return "2017";
// 		// }	
// 		constructor(age){
// 			this.age=age;
// 		}

// 	}
// 	Test.time=function(){
// 		return "2017";
// 	};
// 	let test=new Test(12);
// 	console.log(Test.time(),test.age);
// 	Test.time=function(){
// 		console.log("resetTime");
// 	};
// 	console.log(Test.time());
// }
// {
// 	function add({x=1,y=2}={}){
// 		return x+y;
// 	}
// 	console.log(add());
// 	console.log(add({}));
// 	console.log(add({x:2}));
// }
// {
// 	function add({x,y}={x:1,y:2}){
// 		return x+y;
// 	}
// 	console.log(add());
// 	console.log(add({}));
// 	console.log(add({x:2}));
// 	console.log({}!==undefined);
// }
// {
// 	console.log("\u{20BB7}");
// 	console.log("\u{61}");
// 	console.log(String.fromCodePoint("0x20BB7"));
// 	console.log(/^𠮷{2}/.test("\u{20BB7}\u{20BB7}"));
// }
// {
//  let str="abc";
//  console.log(str.charAt(0));//a
//  console.log(str.charCodeAt(0));//97，这里是10进制的Unicode码
//  let str1="a𠮷";
//  console.log(str1.length);//3
//  console.log(str1.charAt(0));//乱码
//  console.log(str1.charAt(1));//乱码
//  console.log(str1.charCodeAt(0));//55362
//  console.log(str1.charCodeAt(1));//57271
//  console.log(str1.codePointAt(0).toString(16));//20BB7
//  console.log(str1.codePointAt(1));//57271
// let str2="a𠮷𠮷";
// console.log(str2.codePointAt(1).toString(16));
// console.log(str2.codePointAt(2).toString(16));
// console.log(str2.codePointAt(3).toString(16));
// console.log(str2.codePointAt(4).toString(16));
// }
// {
// 	console.log(String.fromCharCode("0x61"));
// 	console.log(String.fromCodePoint("0x20BB7"));
// 	let str="string";
// 	console.log(str.includes("st"));//true
// 	console.log(str.includes("si"));//false
// 	console.log(str.startsWith("str"));//true
// 	console.log(str.endsWith("ng"));//true
// 	console.log(str.repeat(2));
// }
// {
// 	let name="list";
// 	let info="hello world";
// 	let m=`i am ${name},${info}`;
// 	console.log(m);
// 	console.log('1'.padStart(3,"0"));//001
// 	console.log("2.".padEnd(4,"0"));//2.00
// }
// {
// 	let user={
// 		name:'list',
// 		info:"hello world"
// 	};
// 	console.log(abc`i am ${user.name},${user.info}`);
// 	function abc(s,v1,v2){
// 		console.log(s,v1,v2);
// 		return s+v1+v2;
// 	}
// }
// {
// 	let str='\u{20BB7}abc';
// 	for(let i=0;i<str.length;i++){
// 		console.log(str[i]);
// 	}
// 	for(let item of str){
// 		console.log(item);
// 	}
// }
// {
// 	let arr=[1,2,3,4,5];
// 	for(let key of arr){
// 		console.log("arr",key);//1,2,3,4,5
// 	}
// 	for(let key of arr.keys()){
// 		console.log("keys",key);//0,1,2,3,4
// 	}
// 	for(let key of arr.values()){
// 		console.log("values",key);//1,2,3,4,5
// 	}
// 	for(let key of arr.entries()){
// 		console.log("entries",key);//[0,1],[1,2],[2,3],[3,4],[4,5]
// 	}
// 	for(let [key,value] of arr.entries()){
// 		console.log("arr",key,value);//0 1,1 2,2 3,3 4,4 5
// 	}
// 	for(let index of ["1","c","ks"].keys()){
// 		console.log(index);
// 	}
// }
// {
// 	// console.log("扩展运算符",...[1,2,3]);
// 	// console.log(Number.NaN===NaN);
// 	// console.log(Object.is(Number.NaN,NaN));
// 	let obj={a:0,b:{c:1}};
// 	let obj1=JSON.stringify(obj);
// 	let obj2=JSON.parse(obj1);
// 	console.log(obj1);
// 	console.log(obj2);

// }
// {
// 	let a=Symbol.for("a2");
// 	let b=Symbol.for("a2");
// 	console.log(a===b);
// }