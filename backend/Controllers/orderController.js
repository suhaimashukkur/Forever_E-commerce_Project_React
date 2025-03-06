const Order = require('../Models/orderModel')
const User = require('../Models/userModel')


//placing order using COD

exports.placeOrder = async(req,res) =>{
    try{
        const {userId,items,amount,address} = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()

        }
        const newOrder = new Order(orderData)
        await newOrder.save();
        res.json({status:true,message:"Order Placed"})

    }catch(error){
        res.json({status:false,message:error.message})
    }
}