// const student = ["bob",23,"toronto"];
// const object_name = {key1:value1,key2:value2....};

const student = {
	name:"Bob",
	age:23,
	address:"tononto",
	phone:"123-465-2346"
};
//two ways to access object properties- 1. dot notation
console.log("age",student.age );

// 2. square bracket notation
console.log("phone", student["phone"]);

const obj ={};
obj.key1="value1";
obj.key2="value2";
obj.name="Bob";
console.log("object",obj);

//nested object
const user = {
	name:"Alice",
	address:{
		city:"Toronto",
		country:"Canada",
		pincode:"1A3 2L3"
	},
	marks:[12,34,56]
}
console.log("address",user.address);
console.log("city", user.address.city);
console.log("marks",user.marks[0] );

console.log("keys", Object.keys(user));
console.log("values", Object.values(user));
console.log("keys-values",Object.entries(user));

// const user={};
// user.name="john";
// user.surname="smith";
// console.log(user["name"])
// user.name="pete";
