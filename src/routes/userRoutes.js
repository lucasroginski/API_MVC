const express = require("express"); // importando o express
const useControler = require("../controllers/userController"); // importando o controller
const router = express.Router(); // criando o router

router.get("/", useControler.getAll); // rota para listar todos os usuários
router.post("/", useControler.create); // rota para criar um novo usuário
router.delete("/:id", useControler.delete); // rota para deletar um usuário

module.exports = router; // exportando o router
