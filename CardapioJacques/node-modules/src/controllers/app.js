const express = require('express');
const bodyParser = require('body-parser');
const dishRoutes = require('./routes/dishRoutes');

const app = express();
app.use(bodyParser.json());

// ADICIONEI
app.use('/api/menu', dishRoutes);
//PRA RODAR
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
