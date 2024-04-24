const express = require("express")
const app = express();

//Accediendo a un archivo json
const archive = ".\\persons.json"

//Mandando un Texto plano
app.get("/Mario", (req, res) =>{
    res.status(200).send("Ruta de Mario")
});

//Mandando el agrchivo con objetos json
app.post("/Mario", (req, res) =>{
    //Accediendo al modulo
    const persons = require(archive);
    res.status(200).json(persons);
    //Para observar el estado de respuesta
    //console.log("Estado de respuesta: ",res.statusCode)
});

app.listen(8000, () => {
    console.log("listening exitoso!!");
});