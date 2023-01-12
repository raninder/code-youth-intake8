const Pool = require('pg').Pool
const pool = new Pool({
  // user: 'me',
  host: 'localhost',
  database: 'express',
  // password: 'password',
  port: 5432,
})

const getUsers = (req,res) => {
	pool.query('SELECT * FROM users',(err,results)=>{
		if(err){
			throw error;
		}
		res.render("test3",{data:results.rows})
		// return res.json(results.rows);
	})
}

const getUserById = (req,res) => {
	const id = parseInt(req.params.id);
	
	pool.query('SELECT * FROM users where id=$1',[id],(err,results)=>{
		if(err){
			throw error;
		}
			return res.json(results.rows);
	})
}

const createUser = (req,res)=> {
	const name = req.body.uname;
	const email = req.body.email;

	pool.query('INSERT INTO users(name,email) VALUES($1,$2)',[name,email],(err,results)=>{
		if(err){
			throw error;
		}
		res.send(`new user added with name: ${name} and email: ${email}`)
		
	})
}

// const deleteUser = (req,res) => {
// const id= parseInt(req.params.id);
// pool.query('DELETE FROM user where id=$1',[id],(err,results)=>{
// 	if(err){
// 		throw error;
// 	}
// 	res.send(`user deleted with id: ${id}`)
	
// })
// }



module.exports = {getUsers,getUserById,createUser};