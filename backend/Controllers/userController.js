
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require('validator')
const jwt = require("jsonwebtoken");

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET)
}


// Register user

exports.registerUser = async(req,res) => {
  try{
    const { name,email,password } = req.body
    const exist = await User.findOne({email})
    
    //check if email alredy exist 
    if(exist){
      return res.json({success:false, message:"User already exist"})
    }

    //validate email and password
    if(!validator.isEmail(email)){
      res.json({success:false, message:"please enter a valid email"})
    }
    if(password.length < 8){
      res.json({success:false, message:"please enter a strong password"})
    }

    //hashing password

    const salt=await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)

    const newUser = new User({
      name,
      email,
      password:hashedPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})

  }catch(error){
    res.json({success:false, message:error.message})
  }
}

//login user

exports.loginUser = async (req,res) =>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      res.json({success:false, message:"User doesn't exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(isMatch){
      const token = createToken(user._id)
      res.json({success:true,token})
    }else{
      res.json({success:false, message:"invalid email or password"})
    }
  }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
      
  }
}

//Admin Login

exports.adminLogin = async(req,res) =>{
  try{
    const {email,password} = req.body;
    
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign({email,password},process.env.JWT_SECRET)
      console.log(token,"token passed")
      res.json({success:true,token})
    }else{
      res.json({status:false,message:"Invalid email or password",data:process.env.ADMIN_EMAIL})
      console.log(process.env.ADMIN_EMAIL,process.env.ADMIN_PASSWORD)
    }
  }catch(error){
    res.json({status:false,message:error.message})
  }
}