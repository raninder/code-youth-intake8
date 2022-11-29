let sum = 0;
for(let i=1;i<=5;i++){
	let num = parseInt(prompt("enter a number"));
	//come out of loop when we enter a negative number
	// if(num<0){
	// 	break;
	// }
	if(num<0){
		continue;
	}
	sum+=num;  //sum = sum+num;
}
console.log("sum is:", sum);
console.log("average is:",sum/5);

// float ---3.5,6.7