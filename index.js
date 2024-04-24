const express = require("express")
const app = express();

//Accediendo a un archivo json
const archive = ".\\persons.json"
const a_archive = ".\\teams.json"

//Mandando un Texto plano
app.get("/Mario", (req, res) =>{
    res.status(200).send("Ruta de Mario")
});

//Mandando un Texto plano
app.get("/Roberto", (req, res) =>{
    res.status(200).send("Ruta de Roberto")
});

//Mandando el agrchivo con objetos json
app.post("/Mario", (req, res) =>{
    //Accediendo al modulo
    const persons = require(archive);
    res.status(200).json(persons);
    //Para observar el estado de respuesta
    //console.log("Estado de respuesta: ",res.statusCode)
});

//Mandando el agrchivo con objetos json
app.post("/Roberto", (req, res) =>{
    //Accediendo al modulo
    const persons = require(a_archive);
    res.status(200).json(teams);
    //Para observar el estado de respuesta
    //console.log("Estado de respuesta: ",res.statusCode)
});


app.listen(8000, () => {
    console.log("listening exitoso!!");
});