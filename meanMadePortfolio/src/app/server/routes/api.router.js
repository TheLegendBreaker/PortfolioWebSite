const apiRouter = require('express').Router();

module.exports = apiRouter
  .use(require('./catchAll.route'));
