// const student = ["bob",23,"toronto"];
// const object_name = {key1:value1,key2:value2....};

const student = {
	name:"Bob",
	age:23,
	address:"tononto",
	phone:"123-465-2346",
	display: function(){
		console.log("My name is", this.name);
		// return this.name;
	} 
};
//two ways to access object properties- 1. dot notation
console.log("age",student.age );
student.display();

// 2. square bracket notation
console.log("phone", student["phone"]);

const obj ={};
obj.key1="value1";
obj.key2="value2";
obj.name="Bob";
obj.present= true;
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
console.log("address",user.address);  //user["address"]   user[key]
console.log("city", user.address.city);
console.log(user["address"]["country"]);
console.log("marks",user.marks[0] );
for(let i=0;i<user.marks.length;i++){
	console.log(user.marks[i]);

}

console.log("keys", Object.keys(student));
console.log("values", Object.values(student));
console.log("keys-values",Object.entries(student));

for(let key in student){
	console.log(key,student[key]);
}

// const user={};
// user.name="john";
// user.surname="smith";
// console.log(user["name"])
// user.name="pete";
