const express = require("express");
const router = express.Router();

const clientes = require("./api/clientes/clientes.controller");
const autores = require("./api/autores/autores.controller");
const livros = require("./api/livros/livros.controller");
const editoras = require("./api/editoras/editoras.controller");

router.use("/autores", autores);
router.use("/clientes", clientes);
router.use("/livros", livros);
router.use("/editoras", editoras);

module.exports = router;