const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const cozinhaRoutes = require('./routes/cozinhaRoutes');
const indexRoutes = require('./routes/indexRoutes')

db.connect();

app.use(cors());
app.use(express.json());
app.use("/cozinha", cozinhaRoutes);
app.use("/", indexRoutes)

module.exports = app;