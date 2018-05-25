{
	let regex=new RegExp('xyz','i');
	let regex2=new RegExp(/xyz/i);
	console.log(regex.test('xyz123'),regex2.test('xyz123'));
}
{
	let s="bbb_bb_b";
	let a1=/b+/g;
	let a2=/b+/y;
	console.log(a1.exec(s),a2.exec(s));
	// console.log(a1.exec(s));
	// console.log(a1.exec(s));
	// console.log(a1.exec(s));
	// console.log(a1.exec(s));
	console.log(a1.exec(s),a2.exec(s));
}