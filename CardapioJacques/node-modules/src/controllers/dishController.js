const dishModel = require('../models/dishModel');
const categoryModel = require('../models/categoryModel');

// COLOCAR PRATO
const createDish = async (req, res) => {
  const { name, price, description, restaurant_id, category_id } = req.body;

  try {
    const result = await dishModel.createDish(name, price, description, restaurant_id, category_id);
    res.status(201).json({ message: 'Prato cadastrado com sucesso!', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getDishesByRestaurant = async (req, res) => { // COLOCAR OS PRATOS
  const { restaurant_id } = req.query;
  try {
    const dishes = await dishModel.getDishesByRestaurant(restaurant_id);
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// CHAT AJUDOU NO WAIT, AJUDA A ARRUMAR PREÇO
const updatePrice = async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    await dishModel.updatePrice(id, price);
    res.status(200).json({ message: 'Preço atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { createDish, getDishesByRestaurant, updatePrice };
