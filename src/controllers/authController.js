const { User } = require('../models');

// Login
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Validação dos campos obrigatórios
        if (!email || !senha) {
            return res.status(400).json({ message: 'Os campos email e senha são obrigatórios' });
        }

        // Busca usuário pelo email
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            return res.status(401).json({ message: 'Email ou senha incorretos' });
        }

        // Verifica a senha (em produção, use bcrypt para hash)
        if (user.senha !== senha) {
            return res.status(401).json({ message: 'Email ou senha incorretos' });
        }

        // Retorna o usuário (em produção, retorne um token JWT)
        res.json({
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
};
