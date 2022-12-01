var express = require('express');
var router = express.Router();

/* GET users listing. */ //I didn't write this? 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
//why users.js....looks exactly like index.js