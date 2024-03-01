const express = require("express");
const vacantesRouter = require("./vacantes.router");
const departamentosRouter = require("./departamentos.router")
const filtersRouter = require("./filters.router")
const subscriptionRouter = require("./subscription.router")
const estadisticasRouter = require("./estadisticas.router")



const routerApi = (app) => {
	const router = express.Router();
	app.use("/qabackbue/v1", router);

	// Routes
	router.use("/vacantes", vacantesRouter);
	router.use("/departamentos", departamentosRouter);
	router.use("/filters", filtersRouter);
	router.use("/subscription", subscriptionRouter);
	router.use("/estadisticas", estadisticasRouter);

}

module.exports = routerApi;