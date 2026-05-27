const express = require("express"); // importando o express
const useControler = require("../controllers/userController"); // importando o controller
const router = express.Router(); // criando o router

router.get("/", useControler.getAll); // rota para listar todos os usuários
router.get("/:id", useControler.getById); // rota para buscar usuário por ID
router.post("/", useControler.create); // rota para criar um novo usuário
router.put("/:id", useControler.update); // rota para atualizar usuário
router.delete("/:id", useControler.delete); // rota para deletar um usuário
router.post("/login", useControler.login); // rota para login

module.exports = router; // exportando o router
