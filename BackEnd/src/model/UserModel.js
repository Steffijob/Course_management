const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    fullName: { type: String,required:false },
    email: { type: String,required:false, unique: true},
    phoneNo: {type: String, required:false},
    password: { type: String, required:false },
    repeatPassword: { type: String, required:false },
    createdttm : { type: Date, required: true, default: Date.now }
});

userSchema.pre("save", async function(next) {
    if (this.isModified("password")){
        console.log(`${this.password}`);
        this.password = await bcrypt.hash(this.password,1);       
        console.log(`${this.password}`);
        this.repeatPassword=undefined;

    }
    next();
})


module.exports = mongoose.model('User', userSchema);