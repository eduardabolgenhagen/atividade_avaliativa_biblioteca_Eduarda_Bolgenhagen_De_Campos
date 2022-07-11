const express = require("express");
const router = express.Router();
const livrosHandler = require("./livros.handller")

router.get("/", async (req, res) => {
    res.json(await livrosHandler.buscarLivros());
});

module.exports = router;