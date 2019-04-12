const burger = require('../models/burger');
const express = require('express');

// The Router instance is a complete middleware and routing system
const router = express.Router();

// GET route
router.get('/', function(req, res) {
    // res.redirect redirects a request
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.all(function(sandwhichData) {
        // res.render renders a view template
        res.render('index', { sandwhich_data: sandwhichData});
    });
});

// POST route
router.post('/burgers/create', function(req, res) {
    burger.create(req.body.burger_name, function(results) {
        res.redirect('/'); //which would then redirect to /burgers
    });
});

// PUT route
router.put('/burgers/:id', function(req, res) {
    burger.update(req.params.id, function(results) {
        res.sendStatus(200);
    });
});

module.exports = router;