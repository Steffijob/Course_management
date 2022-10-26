const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprovedSchema = new Schema({
  
  fullName: String,
  email: String,
  phoneNo: Number,
  address: String,
  qualification: String,
  course: String,
  datejoin:String,

});

module.exports = mongoose.model('approveddata',ApprovedSchema);

