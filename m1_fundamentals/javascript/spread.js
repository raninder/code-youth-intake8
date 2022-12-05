const a = [2,9,4,5,3,1,8];

//spread operator
let b = a;
console.log("b",b);
b.push(200);
console.log("a",a);
console.log("b",b);
let c = [...a];  //create copy of array
console.log("c",c);
c.push(100);
console.log("a",a);
console.log("b",b);
console.log("c",c);
let d = [...a,11,22,33];  //concatenate
console.log("d",d);
let e = [...a,...c];
console.log("e",e);

// function sum(x, y, z) {
//   return x + y + z;
// }
function sum(numbers){
	let sum=0;
	for(let item of numbers){
		sum+=item;
	}
	return sum;
}

const numbers = [1, 2, 3];

console.log(sum(numbers));