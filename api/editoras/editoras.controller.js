const express = require("express");
const router = express.Router();
const editorasHandler = require("./editoras.handler")

router.post("/", async (req, res) => {
    res.json(await editorasHandler.cadastrarEditoras());
});

router.get("/", async (req, res) => {
    res.json(await editorasHandler.buscarEditoras());
});

router.get("/codigo", async (req, res) => {
    res.json(await editorasHandler.buscarEditorasPorCodigo());
});

router.delete("/codigo", async (req, res) => {
    res.json(await editorasHandler.removerEditoras());
});

module.exports = router;