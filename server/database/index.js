const mongoose = require(mongoose);

mongoose.connect('mongodb://localhost:21017/nav', { useNewUrlParser:  true });

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error in DB connection'));
db.once('open', () => {console.log ('Huge sucess: connected to database');});

module.exports = db;