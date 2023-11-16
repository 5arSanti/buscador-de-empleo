const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const routerApi = require("./routes");


const { logErrors, boomErrorHandler, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = [
	"http://localhost:5173",
	"http://127.0.0.1:5173",
	"https://buscadordeempleo.gov.co/"
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

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})
