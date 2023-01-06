const express = require('express');
const fs = require('fs');
const student = express.Router();

student.get('/',(req,res)=>{
    const data = fs.readFileSync('db.json','utf-8');
    const parse_data= JSON.parse(data);
    const student= parse_data.student;
    res.send(JSON.stringify(student))
})

student.post('/rollNo',(req,res)=>{
    const roll = req.query.roll;
    const body = req.body;
    const data= fs.readFileSync('db.json','utf-8');
    const parse_data = JSON.parse(data);
    const student = parse_data.student;
    
    student.filter((ele)=>{
         if(ele.rollNo == roll){
            ele.name = body.name;
            ele.id= body.id;
            ele.rollNo= body.rollNo;
         }
    })
    fs.writeFileSync('db.json',JSON.stringify(parse_data));
    res.send("Done")
})
console.log("hey");

student.post('/post',(req,res)=>{
    const body = req.body;
    const data =fs.readFileSync('db.json','utf-8');
    const parse_data = JSON.parse(data);
    const student = parse_data.student;
    student.push(body);
    fs.writeFileSync('db.json',JSON.stringify(parse_data));
    res.send("data posted");
})

module.exports={student};


