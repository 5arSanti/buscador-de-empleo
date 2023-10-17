const express = require("express");
const ofertsRouter = require("./oferts.router");


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/oferts", ofertsRouter);
}

module.exports = routerApi;