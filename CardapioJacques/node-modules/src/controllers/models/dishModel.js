const db = require('../db');
// JOGA UM PRATO AÍ
const createDish = (name, price, description, restaurant_id, category_id) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO dishes (name, price, description, restaurant_id, category_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, price, description, restaurant_id, category_id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
const getDishesByRestaurant = (restaurant_id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM dishes WHERE restaurant_id = ?'; // PUXAR DO NOME QUE VAI SER COLOCADO
    db.query(query, [restaurant_id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updatePrice = (id, price) => { //USAR PRA ATUALIZAR PREÇO
  return new Promise((resolve, reject) => {
    const query = 'UPDATE dishes SET price = ? WHERE id = ?';
    db.query(query, [price, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    })
  });
};

module.exports = { createDish, getDishesByRestaurant, updatePrice };
