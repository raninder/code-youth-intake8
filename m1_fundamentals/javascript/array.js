// let student1 = "ebru";
// let student2 = "burak";
// let student3=  "kafi";

// array is ordered collection of elements
//array literal
let student = ['ebru',"kafi","burak","hassan","ray","samantha"];
let a = [2,5,8,9,23];
//using array constructor
let b = new Array(10,20,30,40);
let d= [5,'hi',true, 34.6,"bob"];

let c = [];
c[0]=2;
c[1]=6;
c[2]=8;
// access array elements by its index
// index start with 0
console.log(student[0]);
console.log(student[5]);
console.log("array1:",student);
console.log("array2:",a);
console.log("array3:",b);
console.log("array4:",c);
console.log("array5:",d);
console.log("array size", student.length);
console.log("last element",d[d.length-1]);


for(let i=0;i<a.length;i++){
	a[i]=a[i]*2;
	console.log(a[i]);
}
console.log(a);


// Ex: create an array of colors..display 1st, 4th element and last element, display complete array and its length
