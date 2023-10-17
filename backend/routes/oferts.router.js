const express = require("express");
const OfertsServices = require("../services/oferts.services");
const { validatorHandler } = require("../middlewares/validator.handler");
const { getOfertSchema } = require("../schemas/oferts.schema");

const router = express.Router();
const service = new OfertsServices;

router.get("/", async (request, response) => {
	const oferts = await service.find();
	response.status(200).json(oferts);
});

router.get("/:id",
	validatorHandler(getOfertSchema, "params"),
	async (request, response, next) => {
		try {
			const { id } = request.params;
			const ofert = await service.findOne(id);
			response.status(200).json(ofert);
		} catch (err) {
			next(err);
		}

	}
)

module.exports = router;