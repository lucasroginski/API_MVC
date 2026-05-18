const { User } = require("../models"); // importando o modelo

//get all users
exports.getAll = async(req, res) => { // função para listar todos os usuários
    const users = await User.findAll(); // busca todos os usuários
    res.json(users); // retorna os usuários
}

//Post new user
exports.create = async(req, res) =>{ // função para criar um novo usuário
    const {nome,email,senha} = req.body; // desestrutura o body
    const user = await User.create({nome,email,senha}) // cria o usuário
    res.json(user); // retorna o usuário
}

//delete user by id

exports.delete = async(req, res) => {   // função para deletar um usuário
    const {id} = req.params; // desestrutura o id
    const user = await User.destroy({where: {id}}); // deleta o usuário
    if(!user){ // se não encontrar o usuário
        return res.status(400).json({message: "Usuario nao encontrado"}); // retorna erro
    }
    res.json({
        message: "Usuario deletado com sucesso" // retorna mensagem de sucesso
    });
}
