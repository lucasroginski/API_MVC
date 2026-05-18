const { Sequelize } = require('sequelize'); //chama o sequelize
require('dotenv').config(); //chama o dotenv

const sequelize = new Sequelize( //cria a conexão com o banco
    process.env.DB_NAME, //nome do banco
    process.env.DB_USER, //usuário
    process.env.DB_PASSWORD, //senha
    {
        host: process.env.DB_HOST, //host 
        port: process.env.DB_PORT, //porta
        dialect: process.env.DB_DIALECT || 'mysql', //tipo do banco
        logging: false //desativa os logs
    }
); //fecha a conexão

module.exports = sequelize; //exporta a conexão


