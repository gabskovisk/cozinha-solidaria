const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');

db.connect();

app.use(cors());
app.use(express.json());
//app.use(rota principal)

const index = require('./routes/indexRoutes');

app.use('/', index);

module.exports = app