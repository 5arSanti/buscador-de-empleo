const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = [
	"http://localhost:5173",
	"http://localhost:15105",
	"http://127.0.0.1:5173",
	"http://127.0.0.1:3090",
	"http://localhost",
	"http://127.0.0.1:5500",

    "http://10.140.0.16:15106",
    "http://10.140.0.16:15105",
    "http://10.140.0.16",
    "http://10.140.0.16:15201",


	"https://buscadordeempleo.gov.co/",
	"https://ambientesdepruebas.serviciodeempleo.gov.co",
];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    }
}
app.use(cors(options));



app.get("/", (request, response) => {
    response.send("Hola mi server backend para Buscador de Empleo");
});

routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})
