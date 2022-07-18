const express = require("express");
const router = express.Router();
const clientesHandler = require("./clientes.handler");

router.post("/", async (req, res) => {
    const cliente = req.body;
    res.send(await clientesHandler.cadastrarClientes(cliente));
});

router.get("/", async (req, res) => {
    res.json(await clientesHandler.buscarClientes());
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await clientesHandler.buscarClientesPorCodigo(codigo));
});

router.delete("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await clientesHandler.removerClientes(codigo));
});

module.exports = router;
