{
	let map=new Map();
	let arr=[];
	//增
	map.set("t",1);
	arr.push({t:1});
	console.log(map,arr);
	//arr.unshif({t:1});
	//查
	console.log(map.has("t"));
	console.log(arr.find(item=>item.t));
	//改
	map.set("t",2);
	arr.forEach(item=>item.t?item.t=2:"");
	console.log(map,arr);
	//删
	map.delete('t');
	let index=arr.findIndex(item=>item.t);
	arr.splice(index,1);
	console.log(map,arr);
}
{
	let set=new Set();
	let arr=[];
	//增
	var o={t:1};
	set.add(o);
	arr.push(o);
	console.log(set,arr);
	//查
	console.log(set.has(o),arr.find(item=>item.t));
	//改
	set.forEach(item=>item.t?item.t=2:"");
	arr.forEach(item=>item.t?item.t=2:"");
	console.log(set,arr);
	//删
	set.forEach(item=>item.t?set.delete(item):"");
	//set.delete(o);
	let index=arr.findIndex(item=>item.t);
	arr.splice(index,1);
	console.log(set,arr);

}
{
	var item={t:1};
	let map=new Map();
	let set=new Set();
	let obj={};
	//增
	map.set("t",1);
	set.add(item);
	obj.t=1;//obj[t]=1;
	console.log(map,set,obj);
	//查
	console.log(map.has("t"),set.has(item),"t" in obj);
	//改
	map.set("t",2);
	item.t=2;//set.forEach(item=>item.t?item.t=2:"");
	obj.t=2;
	console.log(map,set,obj);
	//删
	map.delete("t");
	set.delete(item);
	delete obj["t"];
	console.log(map,set,obj);

}