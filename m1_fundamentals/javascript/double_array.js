//double each element of array and display elements which are greater than 10

const a = [2,9,4,5,3,1,8];
// let res = [];
// for(let i=0;i<a.length;i++){
// 	let number = a[i]*2;
// 	if(number>10){
// 		res.push(number);
// 	}
// }
// console.log("resultant array:",res);

//second way

// let res = a.map((item)=>item*2);
// console.log("resultant array:",res);

// let final = res.filter((item)=> item>10);
// console.log("final array:",final);

//third way
let res = a.map((item)=>item*2)
						.filter((item)=>item>10)
						.reduce((sum,ele)=>sum*ele)

console.log("resultant array:",res);



