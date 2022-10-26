const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrollmentSchema = new mongoose.Schema({

    fullName: { type: String,required:false },
    email: { type: String,required:false, unique: true},
    phoneNo: {type: String, required:false},
    address: { type: String, required:false },
    qualification: { type: String, required:false },
    course: { type: String, required:false }

});


module.exports = mongoose.model('Enrollment', enrollmentSchema);