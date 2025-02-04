const express = require('express');
const { createProduct, getAllProducts, getIdProducts, updateProducts, deleteProducts } = require('../Controllers/productController');
const router = express.Router()
router.post('/',createProduct)
router.get('/',getAllProducts)
router.get('/:id',getIdProducts)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProducts)




module.exports= router;