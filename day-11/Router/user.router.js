const express = require('express');

const {UserModel}=require('../model/user.model');


const user = express.Router();


user.get('/',async(req,res)=>{
    try{
const data = await UserModel.find();
res.send(data);
    }catch(err){
console.log("err from user router get requst");
console.log(err);
    }
})

user.post('/create',async(req,res)=>{
    try{
        const payload = req.body;
        const notes = new UserModel(payload);
        await notes.save();
        res.send({"msg":"created succesfully"})
    }catch(err){
        console.log("err from user router from create user req");
        console.log(err);
        res.send({"msg":"err"})
    }
    
})

user.patch('/update/:_id',async(req,res)=>{
    try{
        const payload =req.body;
        const id = req.params;
        await UserModel.findByIdAndUpdate(id,payload);
        res.send("succesfully updated");
    }catch(err){
        res.send({"err":err});
        console.log("err from user router update routs");
        console.log(err);
    }
    

})

user.delete('/delete/:_id',async(req,res)=>{
    try{
        const id = req.params;
        await UserModel.findByIdAndDelete(id);
        res.send({"msg":"user succesfully deleted"});
    }catch(err){
        res.send({"err":err});
        console.log("err form user router delete routs");
        console.log(err);
    }
    

})

user.get('/getdata',async(req,res)=>{
    try{
        const {page,limit}=req.query;
        const data = await UserModel.find().limit(limit).skip(2*(page-1));
        res.send(data);
    }catch(err){
        res.send({"msg":err});
        console.log("err from user router getdata routes");
        console.log(err);
    }
    
})
console.log("done")



module.exports={user};