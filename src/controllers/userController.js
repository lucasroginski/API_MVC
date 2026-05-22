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
        console.log('Body recebido:', req.body); // Debug: mostra o body recebido
        const {nome,email,senha} = req.body; // desestrutura o body
        
        // Validação dos campos obrigatórios
        if (!nome || !email || !senha) {
            return res.status(400).json({message: "Os campos nome, email e senha são obrigatórios"});
        }
        
        const user = await User.create({nome,email,senha}) // cria o usuário
        console.log('Usuário criado:', user); // Debug: mostra o usuário criado
        res.json(user); // retorna o usuário
    } catch (error) {
        console.log('Erro ao criar usuário:', error); // Debug: mostra o erro
        res.status(500).json({message: "Erro ao criar usuario", error: error.message});
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
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar usuario", error: error.message});
    }
}
