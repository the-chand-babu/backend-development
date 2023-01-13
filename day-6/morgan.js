const express = require('express');
const {studentRouter} = require('./router/student.js');
const cors = require('cors');

const app = express();
app.use(cors("*"));

app.use('/student',studentRouter);

app.get('/',(req,res)=>{
    res.send("welcome to homepage");
})

app.listen(7460,()=>{
    console.log("port listing")
})

// let person={
//     name:"aman"
// }
// console.log(person);
// console.dir(person);
// console.dir()

// const fs = require('fs');
 

// fs.open('lecture.txt','wx',(err, file)=> {
//   if(err){
//     console.log(err)
//   }
//   console.log("saved")
// });