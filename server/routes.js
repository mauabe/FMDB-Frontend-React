const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/nav')
  .get(controller.fetch)
  .post(controller.post)

module.exports = router;