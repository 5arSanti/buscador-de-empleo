const express = require("express");
const vacantesRouter = require("./vacantes.router");
const departamentosRouter = require("./departamentos.router")
const filtersRouter = require("./filters.router")
const subscriptionRouter = require("./subscription.router")



const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/vacantes", vacantesRouter);
	router.use("/departamentos", departamentosRouter);
	router.use("/filters", filtersRouter);
	router.use("/subscription", subscriptionRouter);

}

module.exports = routerApi;