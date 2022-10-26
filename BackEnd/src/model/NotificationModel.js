const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({

  name:String,
  message:String,
  course:String,
  date:String,

});

module.exports = mongoose.model('notification',NotificationSchema);

