
const db = require('../db');
//CHAMA O BANCO!!!!!

const getCategories = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM categories', (err, results) => {
      if (err) reject(err);
      resolve(results)
    });
  })
}
module.exports = { getCategories };
