var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var request = require('request');
var parseXML = require('../public/javascripts/parseXML/parseXML');
var Firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../views/index.html'));
});

router.get('/places', function(req, res, next) {
  res.json(parseXML(path.join(__dirname,'../public/assets/places.plist')));
});

router.get('/bixi', function(req, res, next) {
  request('http://www.bikesharetoronto.com/stations/json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

module.exports = router;
