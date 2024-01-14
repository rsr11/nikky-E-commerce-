const mongoose = require("mongoose");
const {Schema} = require("mongoose")


const UserSchema = new Schema({
       fname:{
        type: String,
        required: true
       },
       lname:{
       type: String,
       required: true
             },
       email:{
        type: String,
        required: true,
        unique:true
       },
       password:{
        type: String,
        required: true,
       },
       age:{
        type: Number,
        required:true
       },
       gender:{
        type:String,
        required: true
       },
       Date:{
        type: Date,
        default : Date.now
       }
})


module.exports = mongoose.model('user',UserSchema);

