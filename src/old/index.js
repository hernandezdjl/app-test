const express = require('express')
const bodyParser = require ('body-parser');
const { connection } = require('./config');

const PORT = process.env.PORT || 3000;
const app = express()
app.use(bodyParser.json())


//================== DATA BASE CONNECTION =====================

/*var mysql = require('mysql2');
var conn = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bbff3753e5b75e',
    password: 'ebd11917',
    database: 'heroku_046cfe8810cb0ad',
    waitForConnections: true,
    connectionLimit: 10,
    //queueLimit: 0
})*/
/*
conn.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a Heruko DB')
    }
})*/

//conn.end();
//====================== ROUTES ===============================
app.get('/', async (req, res) => {
    const sql = `SELECT * FROM user`
    //connection.getConnection()
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result)
        } else {
            res.send('Not result.')
        } 
    })
    //await conn.end();
})

app.get('/:id',(req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM user WHERE id = ${id}`
    //conn.on()
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result)
        } else {
            res.send('Not result.')
        }
    })
})

app.post('/add', (req, res) => {
    const sql = `INSERT INTO user SET ?`
    const userObj = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    }
    //conn.connect();
    connection.query(sql, userObj, error => {
        if(error) throw error;
        res.send('User created.')
    })
    //connection.end();
    //res.send('Add new register');
})

app.put('/update/:id', (req, res) => {
    res.send(`Update register id: ${id}`)
})

app.delete('/delete/:id',(req,res)=>{
    res.send(`Delete register id: ${id}`)
})

//=============================================================

app.listen(PORT, ()=>console.log(`Server on port ${PORT}`))
