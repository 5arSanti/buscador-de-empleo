const { sql } = require("../database")


const registrarVisita = async (fecha) => {

	await sql.query`
		MERGE INTO Visitas AS target
		USING (SELECT ${fecha} AS Fecha) AS source
		ON target.Fecha = source.Fecha
		WHEN MATCHED THEN
			UPDATE SET VisitasDiarias = target.VisitasDiarias + 1
		WHEN NOT MATCHED THEN
			INSERT (Fecha, VisitasDiarias) VALUES (source.Fecha, 1);
	`;
}

const obtenerEstadisticas = async (fecha) => {
	const result = await sql.query`
    	SELECT
			ISNULL((SELECT VisitasDiarias FROM Visitas WHERE Fecha = ${fecha}), 0) AS TotalVisitasDiarias,
			SUM(VisitasDiarias) AS TotalVisitasTotales
		FROM Visitas;
	`;
	return result.recordset[0];
}

const obtenerFechaHoy = () => {
	const fechaActual = new Date();
	const anio = fechaActual.getFullYear();
	const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
	const dia = String(fechaActual.getDate()).padStart(2, '0');

	return `${anio}-${mes}-${dia}`;

  }

module.exports = { registrarVisita, obtenerEstadisticas, obtenerFechaHoy };