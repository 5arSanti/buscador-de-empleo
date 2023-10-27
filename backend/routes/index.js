const express = require("express");
const ofertsRouter = require("./oferts.router");
const vacantesRouter = require("./vacantes.router");


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/oferts", ofertsRouter);
	router.use("/vacantes", vacantesRouter);
}

module.exports = routerApi;