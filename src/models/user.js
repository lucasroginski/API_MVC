const { DataTypes } = require('sequelize'); // importando o DataTypes
const sequelize = require('../config/database'); // importando o banco

const User = sequelize.define('User', { // criando o modelo
    nome:{
        type: DataTypes.STRING, // tipo da coluna
        allowNull: false // não pode ser nulo
    },
    email:{
        type: DataTypes.STRING, // tipo da coluna
        allowNull: false // não pode ser nulo
    },
    senha:{
        type: DataTypes.STRING, // tipo da coluna
        allowNull: false // não pode ser nulo
    }
}, {
    tableName: 'usuarios', // nome da tabela existente no banco
    timestamps: false // desativa createdAt e updatedAt (a tabela usa criado_em)
});

module.exports = User; // exportando o modelo
