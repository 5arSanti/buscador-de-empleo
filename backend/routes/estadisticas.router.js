const express = require("express");
const { obtenerEstadisticas, obtenerFechaHoy, registrarVisita } = require("../functions/visitas");

const router = express.Router();

router.get('/', async (request, response) => {
	try {
		const fechaHoy = obtenerFechaHoy();
		await registrarVisita(fechaHoy);


		const estadisticas = await obtenerEstadisticas(fechaHoy);
		response.json(estadisticas);
	} catch (err) {
		console.error('Error al registrar visitas:', err.message);
		response.status(500).json({ message: 'Error al obtener estadísticas' });
	}
});

module.exports = router;