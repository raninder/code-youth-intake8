const express = require('express')
const app = express()
const port = 8080;
const products = require('./data.js')
app.set("view engine","ejs")

app.get('/', (req,res)=>{
	res.send("Home Page")
}
)
app.get('/about', (req,res)=>
res.render("test1")
)

app.get('/search', (req,res)=>
// res.redirect("https://google.com")
res.redirect("/about")
)

// const products = [
// 	{ id:1,
// 	name: "iphone",
// 	price: 500
// 	},
// 	{ id:2,
// 		name: "ipad",
// 		price: 600
// 	},
// 	{ id:3,
// 		name: "watch",
// 		price: 300
// 	}
// ]
app.get('/data',(req,res)=>
// res.json(["one","two","three"])
res.json(products)
)

app.get('/data/:id',(req,res)=>{
	const id = req.params.id;
	const prod= {};
	// res.send(id);
const product = products.find((item)=>item.id==id) 

res.json(product)
}
)
console.log("products", products)
app.listen(port,()=>
console.log("server running")
)