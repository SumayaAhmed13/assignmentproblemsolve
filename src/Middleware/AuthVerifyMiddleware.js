const jwt = require('jsonwebtoken');

const TokenVerify=(req,res,next)=>{
    let Token=req.headers['token'];
    jwt.verify(Token,"dffed334ersddc190422",(err,decoded)=>{
        if(err){
            console.log(Token)
            res.status(401).json({status:"unauthorized"});
            next();
        }
        else{
            let email=decoded['data'];
            req.headers.email=email
            next();
        }
    })

}

module.exports={TokenVerify}