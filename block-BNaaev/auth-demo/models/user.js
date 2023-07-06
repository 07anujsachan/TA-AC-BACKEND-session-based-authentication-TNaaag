var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {name: {type: String , required: true},
email: { type: String, required: true, unique: true },
password: { type: String, minlesgth: S, required: true }, 
age: Number,
phone: { type: String, minlength: 10, maxlength: 13} },
{ timestamps: true }
);


module. exports = mongoose.sodel('User', userSchema);