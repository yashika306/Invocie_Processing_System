const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', invoiceRoutes);

module.exports = app;
