-- Usa o banco de dados
USE meu_teste;

-- Cria a tabela de clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    cnpj VARCHAR(20) NOT NULL
);

-- Mostra a estrutura da tabela
DESCRIBE clientes;

-- Seleciona todos os dados da tabela (vazio inicialmente)
SELECT * FROM clientes;
