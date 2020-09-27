const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const cookieParser = require("cookie-parser");

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    // database: 'shoe-login',
    database: process.env.DATABASE,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
// Parse JSON bodies (as sent byt API clients)
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs')

db.connect((error)=>{
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected...")
    }
})

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'))

app.listen(5001, () =>{
    console.log("Server statred on Port 5001");
})