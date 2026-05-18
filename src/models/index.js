const sequelize = require('../config/database'); //chama o banco

sequelize.sync(); //sincroniza o banco
module.exports = { sequelize,user }; //exporta o banco
