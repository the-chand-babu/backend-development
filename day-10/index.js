const express = require("express");
require('dotenv').config();

const {connection}= require("./db");
const {user}= require('./router/user.router');
const {teacher}=require('../day-10/router/teacher.router');
const app = express();
app.use(express.json());
app.use('/user', user);
app.use('/teacher',teacher);









app.listen(process.env.port, async()=>{
try{
await connection;
console.log("connected succesfully");
console.log(`port is listning ${process.env.port}`);
}catch(err){
    console.log("error connect to db");
    console.log(err);
}
})