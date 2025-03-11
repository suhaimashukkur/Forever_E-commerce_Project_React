
const Product = require("../Models/productModel");

const upload = require('../Middleware/multer')

const cloudinary = require("cloudinary").v2;

// exports.createProduct = async(req,res) =>{
//     try{
//             const productData = new Product({
//                 name:req.body.name,
//                 description:req.body.description,
//                 price:req.body.price,
//                 category:req.body.category,
//                 subCategory:req.body.subCategory,
//                 bestSeller:req.body.bestSeller,
//                 quantity:req.body.quantity,

//             })
//             const savedProducts = await productData.save()
//             res.status(201).json({message:"product created successfully",savedProducts})
//         }catch(err){
//             console.log(err)
//         }

// }

// exports.getAllProducts= async(req,res)=>{
//     try{
//         const getAllProducts = await Product.find()
//         res.status(200).json({message:"all products",getAllProducts})
//     }catch(err){
//         res.status(400).json({message:"bad request",err})
//     }
// }

// exports.getIdProducts=async(req,res)=>{
//     try{
//         const id= req.params.id;
//         const getIdProducts= await Product.findById(id)
//         res.status(200).json({message:"product get by id",getIdProducts})

//     }catch(err){
//         res.status(400).json({message:"error in server",err})
//     }
// }

// exports.updateProducts=async(req,res)=>{
//     try{
//         const updateProducts=await Product.findByIdAndUpdate(req.params.id,req.body)
//         res.status(200).json({message:"product updated successfuly",updateProducts})
//     }catch(err){
//         res.status(400).json({message:"error",err})
//     }
// }

// exports.deleteProducts= async (req,res)=>{
//     try{
//         const deleteProducts=await Product.findByIdAndDelete(req.params.id,req.body)
//         res.status(200).json({message:"product deleted successfuly",deleteProducts})
//     }catch(err){
//         res.status(400).json({message:"error",err})

//     }
// }

//functions for addProducts

exports.addProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      image: imagesUrl,
      date: new Date(),


    };
    console.log(productData);
    const product = new Product(productData);
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

exports.deleteProducts= async (req,res)=>{
       try{
           const deleteProducts=await Product.findByIdAndDelete(req.params.id,req.body)
           res.status(200).json({message:"product deleted successfuly",deleteProducts})
       }catch(err){
           res.status(400).json({message:"error",err})
  
       }
   }
  
//getSingleProduct

exports.getIdProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const getIdProducts = await Product.findById(id);
    res.status(200).json({ message: "product get by id", getIdProducts });
  } catch (err) {
    res.status(400).json({ message: "error in server", err });
  }
};

//List All Products

exports.getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res.status(200).json({ success: "all products", getAllProducts });
  } catch (err) {
    res.status(400).json({ message: "bad request", err });
  }
};

