const sequelize = require('../config/database'); //chama o banco
const User = require('./user'); //importa o modelo User

sequelize.sync() //sincroniza o banco
    .then(() => {
        console.log('Banco sincronizado com sucesso!');
    })
    .catch(err => {
        console.log('Erro ao sincronizar banco:', err);
    });

module.exports = { sequelize, User }; //exporta o banco
