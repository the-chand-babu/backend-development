const mongoose= require('mongoose');

const UserScheam=({
    title:{type:String,required:true},
    Note:{type:String,required:true},
    Tags:{type:String,required:true}
})


const UserModel = mongoose.model('note',UserScheam);
module.exports={UserModel};