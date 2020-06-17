'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('user', { name: "Onalee" });
});

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('user', { name: "Don" });
});

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('user', { name: "Matthew" });
}); 

module.exports = router;
