const express = require("express");
const router = express();
const autoresHandler = require("./autores.handler");

router.post("/", (req, res) => {
    res.json(await autoresHandler.cadastrarAutores());
});

router.get("/", (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

router.get("/id", (req, res) => {
    res.json(await autoresHandler.buscarAutoresPorCodigo());
});

router.get("/", (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

module.exports = router;
