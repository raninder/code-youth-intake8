const express = require('express')
const app = express()
const getUsers = require('./db.js')

app.set("view engine","ejs")

app.get('/',(req,res)=>
res.render('form')
)
app.get('/users',getUsers);

app.use(express.urlencoded());
app.post('/save',(req,res)=>{
// res.send("form submitted")
const name = req.body.uname;
const email = req.body.email;
res.send(`Name: ${name} Email: ${email}`)
})

app.listen(8000, ()=>console.log("server running"))