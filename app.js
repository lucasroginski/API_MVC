const express = require('express'); // importando o express
const app = express(); // criando uma instância do express
const sequelize = require('./src/config/database'); // importando o sequelize
const userRoutes = require('./src/routes/userRoutes'); // importando as rotas


app.use(express.json()); // para receber dados no body

app.use('/api/users', userRoutes); // rotas dos usuários

sequelize // autentica o banco de dados
.authenticate() // autentica o banco de dados
.then(() => { // se autenticar
    console.log('Banco de dados conectado'); // mostra mensagem de sucesso
    app.listen(3000, () => { // inicia o servidor
        console.log('Servidor rodando na porta 3000'); // mostra mensagem de sucesso
    });
})
.catch((err) => { // se não autenticar
    console.log('Erro ao conectar o banco de dados: ' + err); // mostra mensagem de erro
});