const express = require("express");
const router = express.Router();
const autoresHandler = require("./autores.handler");

router.post("/", async (req, res) => {
    const autor = req.body;
    res.json(await autoresHandler.cadastrarAutores(autor));
});

router.get("/", async (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await autoresHandler.buscarAutoresPorCodigo(codigo));
});

router.delete("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await autoresHandler.removerAutores(codigo));
});

module.exports = router;
