
const mongoose = require('mongoose');
const {Schema} = mongoose;

const subjectSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
    }
})

module.exports = subjectSchema;