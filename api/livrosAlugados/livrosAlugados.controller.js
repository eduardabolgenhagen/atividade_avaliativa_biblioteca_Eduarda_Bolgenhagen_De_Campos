const express = require("express");
const router = express.Router();
const livrosAlugados = require("./livrosAlugados.handler");

router.post("/", async (req, res) => {
    const livroAlugado = req.params;
    res.json(await livrosAlugados.cadastrarLivrosAlugados(livroAlugado));
});

router.get("/", async (req, res) => {
    res.json(await livrosAlugados.buscarLivrosAlugados());
});

router.get("/:codigo", async (req, res) => {
    const codigoLivro = req.params.codigo;
    res.json(await livrosAlugados.buscarLivroAlugadoPorCodigo(codigoLivro));
});

router.delete("/:codigo", async (req, res) => {
    const codigoLivro = req.params.codigo;
    res.json(await livrosAlugados.removerLivrosAlugados(codigoLivro));
});

module.exports = router;