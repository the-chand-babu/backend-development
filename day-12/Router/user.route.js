
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

const {authentication}=require('../auth/authentication');
const {NotesModel}= require('../model/note');
const {UserModel}=require('../model/user');
const user = express.Router();




user.post('/signup',async(req,res)=>{
    try{
        const{password,email} = req.body;
        const useremail = await UserModel.findOne({email});
        if(useremail){
            res.send({"msg":"You have already account please login"})
        }else{
            bcrypt.hash(password, 5, async(err, hash)=> {
                // Store hash in your password DB.
                const user =new UserModel({email,password:hash});
                await user.save();
            res.send({"msg":"signup successfully"});
            });
        }  
    }catch(err){
        console.log("erro from user router signup request");
        console.log
        (err);
        res.send("something went wrong");
    }
})




user.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            const hash_password=user.password;
            bcrypt.compare(password, hash_password, function(err, result) {
                if(result){
            const token = jwt.sign({"userID" :user._id},'hussh');
            res.send({"msg":"login succesfully",token});           
                }else{
                    res.send({"msg":"something went wrong"});
                }
            });
        }else{
            res.send({"msg": "dont have account"})
        } 
    }
    catch(err){
        console.log("err from user router login req");
        console.log(err);
    }
})


user.get('/',authentication, async(req,res)=>{
    try{
        const notes = await NotesModel.find();
        res.send(notes);
    }
    catch(err){
        console.log("err from user routs get request");
        console.log(err);
    }
})
    


user.post('/create',authentication,async(req,res)=>{
    try{
        const payload = req.body;
        console.log(payload);
        const new_notes = new NotesModel(payload);
        await new_notes.save();
        res.send({"msg":"created succesfully"});
    }catch(err){
        console.log("err from user router create req");
        console.log(err);
    }
})
    
user.patch('/update/:noteID',authentication,async(req,res)=>{
    try{
        const {noteID}=req.params;
        const {userID}=req.body;
        const payload = req.body;
        const note= await NotesModel.findOneAndUpdate({_id:noteID,userID},payload);
        if(note){
            res.send({"msg":"succesfully update"});
        }else{
            res.send({"msg":"not authorised to updated"});
        }
    }catch(err){
        console.log("err from user routes update requ");
        console.log(err);
    }
})


user.delete('/delete/:noteID',authentication,async(req,res)=>{
    try{
        const {noteID}= req.params;
        const {userID}=req.body;
        if(noteID){
            const note = await NotesModel.findOneAndDelete({_id:noteID,userID});
            if(note){
                res.send({"msg":"succesfully deleted"})
            }else{
            res.send({"msg":"try after some time"});
            }
        }else{
           res.send ({"msg":"enter notes id"});
        }
    }catch(err){
        console.log("err from user router of deleted request");
        console.log(err);
    }
})


module.exports={user}