const express = require('express');
const teacher = express.Router();
const fs = require('fs');
teacher.get('/',(req,res)=>{
    res.send("hello teacher")
})


teacher.post('/post',(req,res)=>{
    const body = req.body;
const data = fs.readFileSync('db.json','utf-8');
const parse_data = JSON.parse(data);
const teacher = parse_data.teacher;

teacher.push(body);
fs.writeFileSync('db.json',JSON.stringify(parse_data));
res.send('data is posted');
})

module.exports={teacher};
console.log("first")