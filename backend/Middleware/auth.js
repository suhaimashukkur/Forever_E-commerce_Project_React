const jwt = require('jsonwebtoken')

const authUser = async(req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Valid...Login Again"})
    }try{
const token_verify = jwt.verify(token,process.env.JWT_SECRET)
req.body.userId = token_verify.id
next();
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

module.exports =authUser;