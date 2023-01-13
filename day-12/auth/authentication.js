const jwt = require("jsonwebtoken");
const { user } = require("../Router/user.route");

const authentication = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token,"hussh");
       if(decoded){
       
        const userID = decoded.userID;
        req.body.userID=userID;
        next();
       }else{
        res.send({"msg":"login"});
       }
    }else{
        res.send({"msg":"login"});

    }
    
   
}



module.exports={authentication};