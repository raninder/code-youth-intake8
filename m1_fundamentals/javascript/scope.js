//glocal scope
let a = 5;

console.log("a1",a);
function display(){
	//global
	 a=12;
	console.log("a2",a);
	//local scope
	let b=8;
	console.log("b1",b);
}

display();
console.log("a3",a);
// console.log("b2",b);
if(a>0){
	//local scope
	let c=8;
	 d="hi";
	console.log("c1",c);
}
// console.log("c2",c)
console.log("d",d);
// let d=10;
// let d=20;

{
	x="thanks"
}
console.log("x",x);


p=5;
console.log("p1",p);
let p;