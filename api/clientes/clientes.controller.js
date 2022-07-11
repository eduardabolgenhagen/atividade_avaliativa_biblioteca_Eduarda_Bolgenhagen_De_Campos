const express = require("express");
const router = express.Router();
const clientesHandler = require("./clientes.handler")

router.get("/", async (req, res) => {
    res.json(await clientesHandler.buscarClientes());
});

module.exports = router;