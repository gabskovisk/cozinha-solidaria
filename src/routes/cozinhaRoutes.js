const express = require("express");
const router = express.Router();

const controller = require("../controller/cozinhaController");
// const authController = require("../controller/authController");

router.get('/inputs', controller.getAllInputs);

router.post('/create', controller.createInput);

router.put('/update/:id', controller.updateInput);

router.delete('/delete/:id', controller.deleteInput);

module.exports = router;
