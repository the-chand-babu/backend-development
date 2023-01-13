const express = require('express');
const {TeacherModel}=require("../modules/teacher.model");
const teacher = express.Router();

teacher.get('/',async(req,res)=>{
    try{
        const data = await TeacherModel.find();
        console.log(data);
        res.send(data)
    }catch(err){
        console.log("err from teacher router of get request");
        console.log(err);
    }
    
})

teacher.post('/create',async(req,res)=>{
    try{
        const payload = req.body;
        const teacher = new TeacherModel(payload);
        await teacher.save();
        res.send({"msg":"created succesfully"})
    }catch(err){
        console.log("err from teacher router of create routes")
            console.log(err);
        
    }
    

})

teacher.delete('/delete/:_id',async(req,res)=>{
    const id = req.params;
    console.log(id);
    await TeacherModel.findOneAndDelete(id);
    res.send({"msg":"deleted succesfully"})
})





module.exports={teacher};