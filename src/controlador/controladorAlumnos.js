const {registroalumno} = require("../servicios/servicioAlumnos");

const guardarAlumnoControlador = async(req, res) => {
    const {firstname, email, password} = req.body;
    const response = await registroalumno(firstname,email,password);
    res.json({response : response}); 
}

module.exports = {guardarAlumnoControlador};