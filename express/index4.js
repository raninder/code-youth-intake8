const express = require('express')
const app = express()
const port = 8080;
app.set("view engine", "ejs")


app.get('/', (req,res)=>{
	res.render("test1",{user:{name:"bob",id:1}})
}
)
const student = [
	{
	name: 'alice',
	city:'toronto',
	id:1
},
{
	name: 'bob',
	city:'Ottawa',
	id:2
}
];

app.get('/data', (req,res)=>
res.render("test3", {data: student}))

app.listen(port,()=>
console.log("server running")
)