const app = require('./server.js');
const port = 3000;

app.app.listen(port, function () {
  console.log('Listing to port: ' + port);
});