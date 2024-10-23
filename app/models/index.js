const { default: mongoose } = require("mongoose");
const student = require("./Student");
const { url } = require("../config/Database");

module.exports = {
  mongoose,
  url,
  student: student(mongoose)
};
