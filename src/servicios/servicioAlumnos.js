const alumno = require("../modelo/alumnos");
const crypto = require ("crypto");

const registroalumno = async(firstname, email, password) => {
    try{
        const id = crypto.randomUUID();
        await alumno.create({
            id,
            firstname,
            email,
            password
        });
        return id;
    }catch (error){
        return error;
    }
}

module.exports = {registroalumno};