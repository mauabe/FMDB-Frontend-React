const app = require('./server.js');

const fetch = function (req, res){
  console.log('In GET... ');

  Nav.find({
    name: req.query,
    celebrities: req.query,
  })
  .then(collection => {
    res.status(200).send(collection)
  })
  .catch(error => {console.log('Error', error)
  });

};