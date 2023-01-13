const mongoose = require("mongoose");


const UserSchema= mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    education:String,
    profile:String
})

const Usermodule = mongoose.model('user',UserSchema)

module.exports={Usermodule};