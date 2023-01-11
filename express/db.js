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
		return res.json(results.rows);
	})
}

module.exports = getUsers;