const express = require("express");
const mysql = require("mysql")

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs-login'
});

db.connect((error)=>{
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected...")
    }
})

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1>")
});

app.listen(5000, () =>{
    console.log("Server statred on Port 5000");
}
)