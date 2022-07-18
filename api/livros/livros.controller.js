const express = require("express");
const router = express.Router();
const livrosHandler = require("./livros.handler")

router.post("/", async (req, res) =>{
    const livro = req.body;
    res.json(await livrosHandler.cadastrarLivros(livro));
})

router.get("/", async (req, res) => {
    res.json(await livrosHandler.buscarLivros());
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await livrosHandler.buscarLivrosPorCodigo(codigo));
});

router.delete("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await livrosHandler.removerLivros(codigo));
});

module.exports = router;