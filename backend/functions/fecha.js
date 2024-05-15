const obtenerFechaHoy = () => {
	const fechaActual = new Date();
	const anio = fechaActual.getFullYear();
	const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
	const dia = String(fechaActual.getDate()).padStart(2, '0');

	return `${anio}-${mes}-${dia}`;
}

const obtenerFechaHoraHoy = () => {
	const fechaActual = new Date();
	const anio = fechaActual.getFullYear();
	const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
	const dia = String(fechaActual.getDate()).padStart(2, '0');
	const hora = String(fechaActual.getHours()).padStart(2, '0');
	const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
	const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

	return `${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
}

const filterDateCondition = (dateFilter) => {
	if (!dateFilter) {
		return "";
	}

	return `AND FECHA_PUBLICACION >= '${dateFilter}'`;
}


module.exports = { obtenerFechaHoy, obtenerFechaHoraHoy, filterDateCondition };