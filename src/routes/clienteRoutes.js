const express = require('express'); // chama o express
const clienteController = require('../controllers/clienteController'); // chama o controller
const router = express.Router(); // cria o router

router.get('/', clienteController.getAll); // rota para listar todos
router.get('/:id', clienteController.getById); // rota para listar por id
router.post('/', clienteController.create); // rota para criar
router.put('/:id', clienteController.update); // rota para atualizar
router.delete('/:id', clienteController.delete); // rota para deletar

module.exports = router; // exporta o router
