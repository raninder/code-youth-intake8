function add(num1,num2){  // num1=3, num2=4
	let sum  = num1+num2;
	// console.log("sum is:",sum)
	return sum;
}

console.log(add(3,4));

// add(14,66);
// add(20,44);

function cube(num){
	let res = num*num*num;
	return res;
	// console.log("result");
}

console.log(cube(22));  //console.log(res)
// let result = cube(22);
// console.log(result);
// ex: cube(5) ->  125

// arrow functions

const multiply = (val1,val2) => { 
	let output= val1*val2;
	return output;
}

const  calculator = (val1,val2,op) => {
	if(op=='+')
	return
}

const display = ()=> console.log("bob");
display();

// const multiply = (val1,val2) => return val1*val2   //3.142*radius*radius

console.log(multiply(3,6));

// Ex: find area of a circle, use arrow functions
// pi*r*r 
// const pi= 3.142

const area = (radius) => { return 3.142*radius*radius}
console.log("area:",area(4))
console.log("area:",area(8))

