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
  console.log(path.join(__dirname,'../public/assets/places.plist'));
  res.json(parseXML(path.join(__dirname,'../public/assets/places.plist')));
});

router.get('/bixi', function(req, res, next) {
  request('http://www.bikesharetoronto.com/stations/json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

router.post('/login', function(req, res, next) {
  console.log("logging in...")
  var ref = new Firebase("https://incandescent-heat-9855.firebaseio.com");
  ref.authWithPassword({
    email    : req.body.email,
    password : req.body.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      res.send({  
        message: 200,
        login: false
      });
    } else {
      console.log("Authenticated successfully with payload:", authData);
      res.send({  
        message: 200,
        token: authData.token,
        login: true
      });
    }
  });
})

router.get('/logout', function(req, res, next) {
  res.send({
    message: 200,
    login: false
  });
});



module.exports = router;
