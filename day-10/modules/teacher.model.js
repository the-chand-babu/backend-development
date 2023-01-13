const mongoose = require('mongoose');


const TeacherSchema= mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    qualification:String,
    subject:String
})


const TeacherModel = mongoose.model('Teacher',TeacherSchema)

module.exports={TeacherModel};