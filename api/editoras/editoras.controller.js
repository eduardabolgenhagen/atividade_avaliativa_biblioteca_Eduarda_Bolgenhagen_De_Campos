const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const editora = req.body;
    res.json(await editorasHandler.cadastrarEditoras(editora));
});

router.get("/", async (req, res) => {
    res.json(await editorasHandler.buscarEditoras());
});

router.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    res.json(await editorasHandler.buscarEditorasPorCodigo(codigo));
});

router.delete("/:codigo", async (req, res) => {    
    const codigo = req.params.codigo;
    res.json(await editorasHandler.removerEditoras(codigo));
});

module.exports = router;