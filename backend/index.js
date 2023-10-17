const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3080;

app.get("/", (request, response) => {
    response.send("Hola mi server backend para Buscador de Empleo");
});

routerApi(app);

app.listen(port, () => {
    console.log("Mi port es: " + port);
})
