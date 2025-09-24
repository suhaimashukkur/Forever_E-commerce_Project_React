const userModel = require("../Models/userModel");


exports.getUserCart = async(req,res) =>{
    try{
        const{userId} = req.body;

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//add products to user Cart

exports.addToCart = async(req,res) =>{
    try{
        const{userId,itemId,size} = req.body;
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }else{
                cartData[itemId][size] =1;
            }
        }else{
            cartData[itemId] ={}
            cartData[itemId][size] =1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Added To The Cart"})
    }catch(error){
        console.log(error)
        res.json({Success:false,message:error.message})
    }
}

exports.updateCart= async(req,res) =>{
    try{
        const{userId,itemId,size,quantity} =req.body;
        const userData = await userModel.findById(userId)
        const cartData=await userData.cartData;
        cartData[itemId][size]=quantity;
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated Successfully"})


    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

