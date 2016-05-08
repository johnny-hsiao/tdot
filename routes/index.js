var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var parseXML = require('../public/javascripts/parseXML/parseXML');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../views/index.html'));
});

router.get('/test', function(req, res, next) {
  console.log(path.join(__dirname,'../public/assets/places.plist'));
  res.json(parseXML(path.join(__dirname,'../public/assets/places.plist')));
});

module.exports = router;
