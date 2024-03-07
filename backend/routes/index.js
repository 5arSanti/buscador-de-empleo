const express = require("express");
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('../backend/app.properties.ini');

const vacantesRouter = require("./vacantes.router");
const departamentosRouter = require("./departamentos.router")
const filtersRouter = require("./filters.router")
const subscriptionRouter = require("./subscription.router")
const estadisticasRouter = require("./estadisticas.router")


const apiStructure = properties.get("app.api.structure")

const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${apiStructure}/v1`, router);

	// Routes
	router.use("/vacantes", vacantesRouter);
	router.use("/departamentos", departamentosRouter);
	router.use("/filters", filtersRouter);
	router.use("/subscription", subscriptionRouter);
	router.use("/estadisticas", estadisticasRouter);

}

module.exports = routerApi;