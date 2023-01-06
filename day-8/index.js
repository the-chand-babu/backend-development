const express = require("express");
const {student} = require('./router/student');
const {teacher} =require('./router/teacher');


const app = express();
app.use(express.json());
const watchMan=(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    
    next()
    }
    app.use(watchMan)

app.use('/student',student);
app.use('/teacher',teacher);





app.listen(3001,(err)=>{
    console.log("port is lisning");
})