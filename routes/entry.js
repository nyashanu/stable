var express = require('express');
var router = express.Router();
var entry = require("../controllers/EntryController.js");

// Get all employees
router.get('/', function(req, res) {
  entry.list(req, res);
});


// > beta landing page

router.get('/blank', function(req, res) {
  entry.blank(req, res);
});

// < beta landing page




// Get single employee by id
router.get('/show/:id', function(req, res) {
  entry.show(req, res);
});

// Create employee
router.get('/create', function(req, res) {
  entry.create(req, res);
});

// Save employee
router.post('/save', function(req, res) {
  entry.save(req, res);
});

// Edit employee
router.get('/edit/:id', function(req, res) {
  entry.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  entry.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  entry.delete(req, res);
});





module.exports = router;
