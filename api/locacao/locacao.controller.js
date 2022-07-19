const express = require("express");
const router = express.Router();
const locacaoController = require("./locacao.handler");

router.post("/", async (req, res) => {
    const locacao = req.body;
    const codigoCliente = locacao.codigoCliente;
    res.json(await locacaoController.cadastrarLocacao(locacao, codigoCliente));
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await locacaoController.buscarLocacaoPorCodigo(codigo));
})

module.exports = router;