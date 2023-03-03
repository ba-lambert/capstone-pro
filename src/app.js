const client = require("./config/db");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("../src/auth/auth.js");
const User = require("./models/userModel");
const authRouter = require("../src/routes/AuthoRoutes.js");
const sendEmail = require('../src/controler/message.js')
const isLoggedIn = require('../src/UserMiddleware/login.js')

const app = express();
app.get('/email',sendEmail)
app.post("/users", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
app.get("/users",async  (req, res) => {
//   client.query(`Select * from 'Users'`, (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//     }
//   });
//   client.end;
const users = await  User.findAll();
console.log(users)
res.send(users)
});
app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("", authRouter);
app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google",
  }),
  (req, res) => {
    res.redirect("/protected");
  }
);

client.connect();
module.exports = app;
