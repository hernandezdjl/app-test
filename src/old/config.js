const mysql = require('mysql2');

const config = {
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bbff3753e5b75e',
    password: 'ebd11917',
    database: 'heroku_046cfe8810cb0ad',
    //charset: "utf8mb4_bin",
    multipleStatements: true
};
const connection = mysql.createPool(config);

connection.getConnection(function (err, connection) {
    //connecting to database
    if (err) {
        //logger.log('error', err);
        console.log("MYSQL CONNECT ERROR: " + err);
    } else {
        //logger.log('info', "MYSQL CONNECTED SUCCESSFULLY.");
        console.log("MYSQL CONNECTED SUCCESSFULLY.");
    }
});

module.exports = {
    connection
}