'use strict';

var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layouts/default', {
  	requiresPage: ['../index.html'],
  	requiresJS: ['app/controllers/index']
  });
});

module.exports = router;