const student = [{
	name:"Bob",
	age:23,
	address:"US",
},
{
	name:"Alice",
	age:22,
	address:"CA",
},
{
	name:"Carol",
	age:20,
	address:"UK",
}
];

console.log(student[0]);
console.log(student[0].address);


// const a = ["alice","bob","carol"];
// for(let i=0;i<a.length;i++){
// console.log(a[i])
// }
//display names of all students
for(i=0;i<student.length;i++){
	// console.log(student[i].name);
	document.write(student[i].name)
}