const express = require('express')
const Product = require('../Models/productSchema')
const productSchema = require('../Models/productSchema')

exports.createProduct = async(req,res) =>{
    try{
            const productData = new Product({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                category:req.body.category,
                subCategory:req.body.subCategory,
                bestSeller:req.body.bestSeller,
                quantity:req.body.quantity,
    
            })
            const savedProducts = await productData.save()
            res.status(201).json({message:"product created successfully",savedProducts})
        }catch(err){
            console.log(err)
        }

}

exports.getAllProducts= async(req,res)=>{
    try{
        const getAllProducts = await Product.find()
        res.status(200).json({message:"all products",getAllProducts})
    }catch(err){
        res.status(400).json({message:"bad request",err})
    }
}

exports.getIdProducts=async(req,res)=>{
    try{
        const id= req.params.id;
        const getIdProducts= await Product.findById(id)
        res.status(200).json({message:"product get by id",getIdProducts})

    }catch(err){
        res.status(400).json({message:"error in server",err})
    }
}

exports.updateProducts=async(req,res)=>{
    try{
        const updateProducts=await Product.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({message:"product updated successfuly",updateProducts})
    }catch(err){
        res.status(400).json({message:"error",err})
    }
}


exports.deleteProducts= async (req,res)=>{
    try{
        const deleteProducts=await Product.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json({message:"product deleted successfuly",deleteProducts})
    }catch(err){
        res.status(400).json({message:"error",err})
    

    }
}