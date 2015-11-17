'use strict';

var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Index',
  	page: '../index.html',
  	requiresJS: ['app/controllers/index']
  });
});

router.get('/about', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'About',
  	page: '../about.html',
  	requiresJS: ['app/controllers/about']
  });
});

module.exports = router;