const express = require('express');
const { placeOrder } = require('../Controllers/orderController');

const orderRouter = express.Router()

orderRouter.post('/place-order',placeOrder)

module.exports = orderRouter;