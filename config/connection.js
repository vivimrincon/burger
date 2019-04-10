/* Because this file is within a folder and not at the root 
directory like the .env file is, you have to preload dotenv. 
You do so by writing `node -r dotenv/config config/connection.js`
*/
require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

module.exports = connection;