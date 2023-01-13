const { application } = require('express');
const express = require('express');
const cors=require('cors');


const studentRouter = express.Router();

studentRouter.get('/',(req,res)=>{
    res.send(JSON.stringify({"name":"chand"}));
});

module.exports={
    studentRouter
}
studentRouter.get('/data',(re,res)=>{
    res.send(" all data")
})

