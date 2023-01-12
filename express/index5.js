const express = require('express')
const app = express()
// const {getUsers,getUserById,createUser} = require('./db.js')
const db = require('./db.js')


app.set("view engine","ejs")

app.get('/',(req,res)=>
res.render('form')
)
//get all users from database
app.get('/users',db.getUsers);

//get specified user from database
app.get('/users/:id',db.getUserById);

app.use(express.urlencoded());
// app.post('/save',(req,res)=>{
// res.send("form submitted")
// const name = req.body.uname;
// const email = req.body.email;
// res.send(`Name: ${name} Email: ${email}`)
// })

app.post('/save',db.createUser);

// app.delete('/users/delete/:id',deleteUser)

app.listen(8000, ()=>console.log("server running"))