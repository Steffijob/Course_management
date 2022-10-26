const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    name: { type: String },
    duration: { type: String },
    description: { type: String }
})


module.exports = mongoose.model('Course', courseSchema);