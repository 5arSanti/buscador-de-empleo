const express = require("express");
const cors = require("cors");

const sql = require("mssql");

const routerApi = require("./routes");
const { logErrors, boomErrorHandler, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = ["http://localhost:5173", "https://buscadordeempleo.gov.co/"];
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

//---------------------------------------
// const dbConfig = {
// 	user: '',
// 	password: '',
// 	server: 'server_name', // Puede ser una dirección IP o un nombre de host
// 	database: '',
// 	options: {
// 		trustServerCertificate: true
// 	},
// };

// Conectar a la base de datos
// sql.connect(dbConfig, (err) => {
// 	if (err) {
// 		console.error('Error al conectar a la base de datos:', err);
// 	} else {
// 		console.log('Conexión a la base de datos exitosa');
// 	}
// });


const sqlConfig = {
	user: "Userdesarrollo",
	password: "D3s4Rr0lLo",
	database: "PRUEBAS",
	server: "10.140.0.22",
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		trustServerCertificate: true,
		encrypt: false
	}
}

// async () => {
// 	try {
// 		await sql.connect(sqlConfig)
// 		const result = await sql.query("select * from mytable");
// 		console.dir(result)
// 	}
// 	catch (err) {
// 		console.log(err);
// 	}
// }

sql.connect(sqlConfig, (err) => {
	if (err) {
		console.error('Error al conectar a la base de datos:', err);
	} else {
		console.log('Conexión a la base de datos exitosa');
		app.get("/oferts", (resquest, response) => {
			sql.query("SELECT TOP (1) * FROM Vacantes_Vigentes_Completo ", (err, data) => {
				if(err){
					console.log(err);
				}
				response.json(data);
			})
		})
	}
});

// app.get("/oferts", (resquest, response) => {
// 	sql.query("SELECT * FROM Vacantes_Vigentes_Completo", (err, data) => {
// 		if(err){
// 			console.log(err);
// 		}
// 		response.json(data);
// 	})
// })

//---------------------------------------

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Mi port es: " + port);
})
