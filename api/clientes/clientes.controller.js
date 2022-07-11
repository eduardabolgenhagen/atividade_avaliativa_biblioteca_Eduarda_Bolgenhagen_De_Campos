const express = require("express");
const router = express.Router();
const clientesHandler = require("./clientes.handler")

router.get("/", async (req, res) => {
    res.json(await clientesHandler.buscarClientes());
});

router.get("/id", async (req, res) => {
    res.json(await clientesHandler.buscarClientesPorCodigo());
});

router.post("/", async (req, res) => {
    // const cliente = req.body;
    res.send(await clientesHandler.cadastrarClientes());
});

router.delete("/id", async (req, res) => {
    res.json(await clientesHandler.removerClientes());
});

module.exports = router;
