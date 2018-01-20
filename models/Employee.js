var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  addone: String,
  addtwo: String,
  addthree: String,
  addfour: String,
  addfive: String,
  addsix: String,
  addseven: String,
  lang_one: String,
  lang_two: String,
  lang_three: String,
  lang_four: String,
  updated_at: { type: Date, default: Date.now },
});

// var EmployeeSchema = new mongoose.Schema({
//   name: String,
//   address: String,
//   position: String,
//   salary: Number,
//   updated_at: { type: Date, default: Date.now },
// });

module.exports = mongoose.model('paragraph', EmployeeSchema);
