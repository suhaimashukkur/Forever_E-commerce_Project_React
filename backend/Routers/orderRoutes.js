const express = require('express');
const { placeOrder, listAllOrders } = require('../Controllers/orderController');

const orderRouter = express.Router()

orderRouter.post('/place-order',placeOrder)
orderRouter.get('/list-order',listAllOrders)

module.exports = orderRouter;