const express = require('express')
const app = express()
const port = 8080;
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', (req,res)=>{
	res.send("Home Page")
}
)
app.get('/test', (req,res)=>
res.render("test"))
app.get('/test1', (req,res)=>
res.render("test1"))

app.listen(port,()=>
console.log("server running")
)