const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');
router.post('/dishes', dishController.createDish);
// PRATOS BASEADOS EM RESTAURANTES
router.get('/dishes', dishController.getDishesByRestaurant);
//     COLOCAR NOVO PREÇO AQ!
router.put('/dishes/:id/price', dishController.updatePrice);
module.exports = router;
