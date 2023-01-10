var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bbff3753e5b75e',
    password: 'ebd11917',
    database: 'heroku_046cfe8810cb0ad'
})
conn.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a Heruko DB')
    }
})