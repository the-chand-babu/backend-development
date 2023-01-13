const { application } = require('express');
const express = require('express');
const multer = require('multer');

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'image');
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
    
}).single('image');

const app = express();

app.post('/upload',upload,(req,res)=>{
    res.send("upload succesfull");
})








app.listen(7470,()=>{
    console.log("port listing")

});


console.log()