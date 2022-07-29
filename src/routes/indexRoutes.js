const express = require("express");
const router = express.Router();

router.get("/",  (req, res) => {
    res.status(200).send({
        title: "ReprogramaON15 -> Cozinha Solidária - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, aqui você encontra a primeira versão deste projeto, uma API voltada para o inventário de uma cozinha solidária, projeto social que atende pessoas em situação de insegurança alimentar."
    })
})

module.exports = router