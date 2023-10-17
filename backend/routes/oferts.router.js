const express = require("express");
const OfertsServices = require("../services/oferts.services");

const router = express.Router();
const service = new OfertsServices;

router.get("/", async (request, response) => {
	const oferts = await service.find();
	response.status(200).json(oferts);
});

router.get("/:id", async (request, response) => {
	const { id } = request.params;
	const ofert = await service.findOne(id);
	response.status(200).json(ofert);
})

module.exports = router;