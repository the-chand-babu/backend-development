const mongoose = require("mongoose");

const UserSchema=({
    name:String,
    email:String,
    password:String,
    mobile:Number,
})



const UserModel = mongoose.model('user',UserSchema)

module.exports={UserModel}