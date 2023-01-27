const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alumnosSchema =new Schema({
    id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
},{collection:"alumnos"});

module.exports = mongoose.model("alumno",alumnosSchema);