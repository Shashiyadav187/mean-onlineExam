var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Que = require('../models/Que.js');

/* GET ALL QueS */
router.get('/', function(req, res, next) {
  Que.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Que BY ID */
router.get('/:id', function(req, res, next) {
  Que.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Que */
router.post('/', function(req, res, next) {
  Que.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Que */
router.put('/:id', function(req, res, next) {
  Que.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Que */
router.delete('/:id', function(req, res, next) {
  Que.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;