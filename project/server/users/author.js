const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.post('/login', controller.login);
router.delete('/logout', controller.logout);
router.get('/populate', controller.populate);

module.exports = router;