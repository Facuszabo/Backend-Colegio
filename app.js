const express = require("express");
const bodyparser = require("body-parser");
const router = require("./src/rutas/alumnos");
const app= express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(router);

module.exports = app;