const express = require("express");
const router = express.Router();
const autoresElivros = require("./autoresElivros.handler");

router.post("/", async (req, res) => {
    const autoreslivros = req.body;
    res.json(await autoresElivros.cadastsrar(autoreslivros));
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await autoresElivros.buscarPorCodigo(codigo));
});

router.get("/", async (req, res) => {
    res.json(await autoresElivros.buscarAutoresELivros());
});

router.delete("/", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await autoresElivros.remover(codigo));
});

module.exports = router;