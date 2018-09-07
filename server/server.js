const express = require('express');
const parser = require('body-parser');
const path = require('path');

const db = require('../database/index.js');
const {fetch} = require("./controller.js");

const app = express();

app.use(express.static(path.resolve(__dirname, '../static')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

module.exports.app = app;