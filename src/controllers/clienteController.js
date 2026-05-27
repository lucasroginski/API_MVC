const { Cliente } = require('../models');

//get all clientes
exports.getAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
}

//get cliente by id
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cliente', error: error.message });
    }
}

//post new cliente
exports.create = async (req, res) => {
    try {
        const { razao_social, cnpj } = req.body;
        const cliente = await Cliente.create({ razao_social, cnpj });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar cliente', error: error.message });
    }
}

//update cliente
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { razao_social, cnpj } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.update({ razao_social, cnpj });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar cliente', error: error.message });
    }
}