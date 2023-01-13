const express = require('express');

const {Usermodule}= require("../modules/user.module");

const user = express.Router();

user.get('/', async(req,res)=>{
    try{
        const data = await Usermodule.find();
        // console.log(data)
        res.send(data);
    }catch
    (err){
        console.log("err from user router of get req");
        console.log(err);
    }
    
})

user.post('/create',async(req,res)=>{
    try{
        const payload =req.body;
        const userdata = new Usermodule(payload)
        await userdata.save();
        res.send({"msg":"created succesfully"});
    }
    catch(err){
        console.log("err from user router create routes");
        console.log(err);
    }
    
})

user.delete('/delete/:_id',async(req,res)=>{
    try{
        const id =req.params
        await Usermodule.findOneAndDelete(id)
        res.send({"msg":"deleted Succesfully","status-code":"200"})
    }
      catch(err){
        console.log("err from user router delete routes");
        console.log(err);
      }
})

module.exports={user};