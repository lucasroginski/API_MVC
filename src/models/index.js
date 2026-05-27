const sequelize = require('../config/database'); //chama o banco
const User = require('./user'); //importa o modelo User
const Cliente = require('./clientes'); //importa o modelo Cliente

sequelize.sync() //sincroniza o banco
    .then(() => { // se der certo
        console.log('Banco sincronizado com sucesso!'); // mostra mensagem de sucesso
    })
    .catch(err => { // se der erro
        console.log('Erro ao sincronizar banco:', err); // mostra mensagem de erro
    });

module.exports = { sequelize, User, Cliente }; //exporta o banco
