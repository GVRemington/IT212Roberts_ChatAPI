var express = require('express');
var router = express.Router();

/* GET home page. */ //I didn't write this either? lol
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
