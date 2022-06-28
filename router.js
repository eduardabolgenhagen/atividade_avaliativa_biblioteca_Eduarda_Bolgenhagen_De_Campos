const express = require("express");
const router = express.Router();

const usuarios = require("./api/usuarios.controller");

router.use("/usuarios", usuarios);

module.exports = router;