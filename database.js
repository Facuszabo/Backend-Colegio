const mongoose = require('mongoose');
const url = 'mongodb://localhost/dbalumnos';
mongoose.set('strictQuery',false)
mongoose.connect(url, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("BD conectada");
});