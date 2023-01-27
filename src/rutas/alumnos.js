const {Router}= require("express");
const router = Router();
const {guardarAlumnoControlador} = require("../controlador/controladorAlumnos");

router.post("/alumnos", guardarAlumnoControlador);

module.exports = router;