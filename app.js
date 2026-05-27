const express = require('express'); //importa o express
const app = express(); //cria uma instância do express
const sequelize = require('./src/config/database'); //importa o sequelize
const userRoutes = require('./src/routes/userRoutes'); //importa as rotas dos usuários
const clienteRoutes = require('./src/routes/clienteRoutes'); //importa as rotas dos clientes
const authRoutes = require('./src/routes/authRoutes'); //importa as rotas de autenticação

//middleware
app.use(express.json()); //habilita o json

app.use('/api/users', userRoutes); //habilita as rotas dos usuários
app.use('/api/clientes', clienteRoutes); //habilita as rotas dos clientes
app.use('/api/auth', authRoutes); //habilita as rotas de autenticação

sequelize //autentica o banco de dados
.authenticate() //autentica o banco de dados
.then(() => { //se autenticar
    console.log('Banco de dados conectado'); //mostra mensagem de sucesso
    app.listen(3000, () => { //inicia o servidor
        console.log('Servidor rodando na porta 3000'); //mostra mensagem de sucesso
    });
})
.catch((err) => { //se não autenticar
    console.error('Erro ao conectar com o banco de dados:', err); //mostra mensagem de erro
});
