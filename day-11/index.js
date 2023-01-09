const express = require('express');

require('dotenv').config();

const {connection}=require('./db');
const {user}=require('../day-11/Router/user.router');

const app = express();
app.use(express.json());
app.use('/user',user);










app.listen(process.env.port,async(req,res)=>{
    try{
        connection;
        console.log("connected to db");
        console.log(`port is listing ${process.env.port}`);
    }catch(err){
        console.log("err from connected to db");
        console.log(err);
    }
})