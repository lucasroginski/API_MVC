const { User } = require("../models"); // importando o modelo

//get all users
exports.getAll = async(req, res) => { // função para listar todos os usuários
    try {
        const users = await User.findAll(); // busca todos os usuários
        res.json(users); // retorna os usuários
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar usuarios", error: error.message});
    }
}

//Post new user
exports.create = async(req, res) =>{ // função para criar um novo usuário
    try {
        const {nome,email,senha} = req.body; // desestrutura o body
        
        // Validação dos campos obrigatórios
        if (!nome || !email || !senha) {
            return res.status(400).json({message: "Os campos nome, email e senha são obrigatórios"});
        }
        
        const user = await User.create({nome,email,senha}) // cria o usuário
        res.status(201).json(user); // retorna o usuário
    } catch (error) {
        res.status(500).json({message: "Erro ao criar usuario", error: error.message});
    }
}

//get user by id
exports.getById = async(req, res) => { // função para buscar usuário por ID
    try {
        const {id} = req.params; // desestrutura o id
        const user = await User.findByPk(id); // busca o usuário por ID
        if(!user){ // se não encontrar o usuário
            return res.status(404).json({message: "Usuario nao encontrado"}); // retorna erro
        }
        res.json(user); // retorna o usuário
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar usuario", error: error.message});
    }
}

//update user
exports.update = async(req, res) => { // função para atualizar usuário
    try {
        const {id} = req.params; // desestrutura o id
        const {nome,email,senha} = req.body; // desestrutura o body
        
        const user = await User.findByPk(id); // busca o usuário por ID
        if(!user){ // se não encontrar o usuário
            return res.status(404).json({message: "Usuario nao encontrado"}); // retorna erro
        }
        
        await user.update({nome,email,senha}); // atualiza o usuário
        res.json(user); // retorna o usuário atualizado
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar usuario", error: error.message});
    }
}

//delete user by id

exports.delete = async(req, res) => {   // função para deletar um usuário
    try {
        const {id} = req.params; // desestrutura o id
        const user = await User.destroy({where: {id}}); // deleta o usuário
        if(!user){ // se não encontrar o usuário
            return res.status(400).json({message: "Usuario nao encontrado"}); // retorna erro
        }
        res.json({
            message: "Usuario deletado com sucesso" // retorna mensagem de sucesso
        });
    } catch (error) { // se der erro
        res.status(500).json({message: "Erro ao deletar usuario", error: error.message}); // retorna erro
    }
}
