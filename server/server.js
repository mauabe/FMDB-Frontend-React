const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const {fetch} = require("./controller.js")

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../static')));

module.exports = app;