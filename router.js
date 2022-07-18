const express = require("express");
const router = express.Router();

const autores = require("./api/autores/autores.controller");
const clientes = require("./api/clientes/clientes.controller");
const editoras = require("./api/editoras/editoras.controller");
const livros = require("./api/livros/livros.controller");

router.use("/autores", autores);
router.use("/clientes", clientes);
router.use("/editoras", editoras);
router.use("/livros", livros);

module.exports = router;
