var mongoose = require("mongoose");
var Employee = require("../models/Employee");
var paragraphController = {};

// var Entry = require("../models/Entry");

/*

*/

  // Show list of employees
  // paragraphController.list = function(req, res) {
  //   Entry.find({}).exec(function (err, employees) {
  //     if (err) {
  //       console.log("Error:", err);
  //     }
  //     else {
  //       res.render("../views/employees/index", {employees: employees});
  //     }
  //   });
  // };

/*

*/


// Show list of employees
paragraphController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/index", {employees: employees});
    }
  });
};

// Show employee by id
paragraphController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
};

// Create new employee
paragraphController.create = function(req, res) {
  res.render("../views/employees/create");
};

// Save new employee
paragraphController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/employees/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/employees/show/"+employee._id);
    }
  });
};

// Edit an employee
paragraphController.edit = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};

// Update an employee
paragraphController.update = function(req, res) {
  // Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.title, address: req.body.address, position: req.body.position, salary: req.body.salary, addone: req.body.addone }}, { new: true }, function (err, employee) {
    Employee.findByIdAndUpdate(req.params.id, { $set: { addone: req.body.addone, addtwo: req.body.addtwo, addthree: req.body.addthree, addfour: req.body.addfour, addfive: req.body.addfive, addsix: req.body.addsix, addseven: req.body.addseven, lang_one: req.body.lang_one, lang_two: req.body.lang_two, lang_three: req.body.lang_three, lang_four: req.body.lang_four,  }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees/show/"+employee._id);
  });
};

// Delete an employee
paragraphController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};

module.exports = paragraphController;
