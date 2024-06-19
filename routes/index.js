var express = require('express');
var router = express.Router();
const userModel = require("../models/userSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.post('/register', function(req, res, next) {
  var userData = new userModel({
    username: req.body.username,
    userprofile: req.body.userprofile
  })
});

userModel.register

module.exports = router;
