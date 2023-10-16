const express = require("express");

const app = express();
const port = 3080;

app.get("/", (request, response) => {
    response.send("Hola mi server backend para Buscador de Empleo");
})

app.listen(port, () => {
    console.log("Mi port es: " + port);
})
