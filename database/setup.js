const mongoose = require('mongoose');
const db = require('./index.js');
const fmdbdata = require('../data/fmdbdata.js');
const Nav = require('./models.js');

const importOnce = function (fmdbdata){
  fmdbdata.forEach(item => new Nav ({
    "name": item.name,
    "director": item.director,
    "writer": item.writer,
    "actor": item.actor,
    "actress": item.actress,
    "producer": item.producer,
    "genre": item.genre
  }))
  .save()
  .then(() => {
    console.log("Success! Saved in database!");
  })
  .catch(error => {
    console.log("Error! Not saving in database:", error);
  });
};
