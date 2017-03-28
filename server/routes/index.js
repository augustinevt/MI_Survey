var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index');
});

router.post('/survey-data', db.saveBlob);
router.get('/checkEmail/:email', db.checkEmail);

module.exports = router;
