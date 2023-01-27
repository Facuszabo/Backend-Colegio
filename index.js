require("./database");
const app = require("./app");
const main=() =>{
    app.listen(8000,() => {console.log("escuchando")});
}

main();

//app.post("/enviar",(req,res) => {
  //  res.status(201).send("hola" + req.body.nombre + " " + req.body.apellido)})
