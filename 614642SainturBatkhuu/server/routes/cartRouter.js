const express = require('express');
const controller = require('../controllers/cartController');
const router = express.Router();

router.get('/', controller.cartItems);
router.post('/', controller.addItem);
router.delete('/', controller.removeItem);
router.put('/quantity/add', controller.addQuantity);
router.put('/quantity/minus', controller.minusQuantity);

module.exports = router;