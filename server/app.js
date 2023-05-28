require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const { router } = require('./routes');

const app = express();
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

app.use('/qa', router);

module.exports = app;
