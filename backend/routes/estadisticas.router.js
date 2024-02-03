const express = require("express");

const { obtenerEstadisticas, registrarVisita } = require("../functions/visitas");
const { obtenerFechaHoy, obtenerFechaHoraHoy } = require("../functions/fecha");
const { registrarConsultaVacante, obtenerVacantesMasConsultadas } = require("../functions/consulta");

const router = express.Router();

router.get('/visitas', async (request, response) => {
	try {
		const fechaHoy = obtenerFechaHoy();
		await registrarVisita(fechaHoy);


		const estadisticas = await obtenerEstadisticas(fechaHoy);
		response.json(estadisticas);
	}
	catch (err) {
		response.status(500).json({ message: 'Error al obtener estadísticas' });
	}
});


router.get("/vacantes/obtener", async (resquest, response) => {
	try {
		const cantidadVacantes = 10; // Ajusta según sea necesario
		const vacantesMasConsultadas = await obtenerVacantesMasConsultadas(cantidadVacantes);

		return response.status(200).json({
			vacantesMasConsultadas: vacantesMasConsultadas
		});
	} catch (err) {
		return response.status(500).json(err.message);
	}
});

router.post('/vacantes/registrar', async (request, response) => {
	try {
		const fechaHoraActual = obtenerFechaHoraHoy();
		const { codigoVacante } = request.body;

		await registrarConsultaVacante(fechaHoraActual, codigoVacante);

		response.status(200).json({ message: 'Estadísticas registradas exitosamente.' });
	}
	catch (err) {
		console.error('Error al procesar estadísticas:', err.message);
		response.status(500).json({ message: 'Error guardando estadisticas' });
	}
});

module.exports = router;