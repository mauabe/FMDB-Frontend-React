const mongoose = require(mongoose);
const db = require('.index.js');
const movieData = require('../data/fmdb_data.js')

const importOnce = function (movieData){
  movieData.forEach(item => new Nav ({
    "name": item.name,
    "director": item.director,
    "writer": item.writer,
    "actor": item.actor,
    "actress": item.actress,
    "producer": item.producer,
    "genre": item.genre

  }))
  .save()

  
};
