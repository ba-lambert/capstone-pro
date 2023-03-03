const client = require('./config/db.js')
const express = require('express');
const sendEmail = require('./controler/message.js')
const app = express();
const bodyParser = require("body-parser");
const User = require('./models/user.model.js');
app.use(bodyParser.json());

app.get('/email',sendEmail)
// app.post('/email',)
app.get("/",(req,res)=>{
    res.send('<button onClick=>(){console.log("error)}>Sign</button>')
})
app.post('/users',async (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users(id,firstname, lastname,email) 
                       values( '${user.id}','${user.firstname}', '${user.lastname}','${user.email}')`

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