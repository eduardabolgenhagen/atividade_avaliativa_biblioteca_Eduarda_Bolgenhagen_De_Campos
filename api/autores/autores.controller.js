const express = require("express");
const router = express();
const autoresHandler = require("./autores.handler");

router.post("/", (req, res) => {
    const autor = req.body;
    res.json(await autoresHandler.cadastrarAutores(autor));
});

router.get("/", (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

router.get("/codigo", (req, res) => {
    res.json(await autoresHandler.buscarAutoresPorCodigo());
});

router.get("/codigo", (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

module.exports = router;
