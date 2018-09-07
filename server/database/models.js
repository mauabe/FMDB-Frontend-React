const mongoose = require('mongoose');
const db = require('.index.js');

const navSchema = mongoose.Schema ({
  "name": String,
  "director": String,
  "writer": String,
  "actor": String,
  "actress": String,
  "producer": String,
  "genre": String
});

const Nav = mongoose.schema('Nav', navSchema)

module.exports = Nav;