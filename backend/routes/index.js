const express = require("express");
const ofertsRouter = require("./oferts.router");
const vacantesRouter = require("./vacantes.router");
const departamentosRouter = require("./departamentos.router")
const filtersRouter = require("./filters.router")


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/oferts", ofertsRouter);
	router.use("/vacantes", vacantesRouter);
	router.use("/departamentos", departamentosRouter);
	router.use("/filters", filtersRouter);
}

module.exports = routerApi;