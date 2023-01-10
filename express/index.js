const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req,res)=>{
	res.send("Home Page")
}
)
app.get('/about', (req,res)=>
res.send("about us  info")
)

app.get('/user', (req,res)=>
res.send("user list")
)
app.listen(port,()=>
console.log("server running")
)