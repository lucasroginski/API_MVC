const express = require('express'); // importando o express
const app = express(); // criando uma instância do express
const sequelize = require('./src/config/database'); // importando o sequelize
const userController = require('./src/controllers/userController'); // importando o controller


app.use(express.json()); // para receber dados no body

app.use('/users', userController); // rotas dos usuários