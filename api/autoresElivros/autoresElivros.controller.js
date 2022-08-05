const express = require("express");
const router = express.Router();
const autoresElivros = require("./autoresElivros.handler");

router.post("/", async (req, res) => {
    const autoresElivros = req.body;
    const codigoCliente = autoresElivros.codigoCliente;
    const codigoLivro  = autoresElivros.codigoLivro;
    res.json(await autoresElivros.cadastrarLocacao(locacao, codigoCliente, codigoLivro));
});

// router.get("/:codigo", async (req, res) => {
//     const codigo = req.params.codigo;
//     res.json(await autoresElivros.buscarLocacaoPorCodigo(codigo));
// });

// router.get("/", async (req, res) => {
//     res.json(await autoresElivros.buscarLocacoes());
// });

// router.delete("/", async (req, res) => {
//     const codigo = req.params.codigo;
//     res.json(await autoresElivros.removerLocacao(codigo));
// });

module.exports = router;