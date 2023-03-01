const client = require('./config/db')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send('<button onClick=>(){console.log("error)}>Sign</button>')
})
app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;})
client.connect();
module.exports = app