const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const projectsRouters=require("./routes/projects")
const  userRouters=require("./routes/user")
//const  session =require('express-session') 
const app = express();

mongoose.set('useCreateIndex', true) ;
mongoose.connect("mongodb://localhost:27017/project",{useNewUrlParser:true,useUnifiedTopology: true})
  .then(() => {
    console.log("mongodb连接成功!")
  })
  .catch(() => {
    console.log("mongodb连接失败!")
  });




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});


//app.use(session);
app.use("/api/project",projectsRouters);
app.use("/api/user",userRouters);

module.exports = app;
