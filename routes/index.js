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

router.get('/realtime', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Tempo real',
  	page: '../realtime.html',
  	requiresJS: ['app/controllers/realtime', 'app/libraries/bootstraptreeview/js/bootstraptreeview.min']
  });
});

module.exports = router;