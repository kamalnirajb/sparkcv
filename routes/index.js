var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var locations = require(__dirname + '/assets/locations/cities.json');
var sca = require(__dirname + '/assets/single_choice_attributes.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    profile: {
      sca: sca,
      locations: locations
    }
  });
});

module.exports = router;
