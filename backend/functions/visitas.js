const { sql } = require("../database")


const registrarVisita = async (fecha) => {
	console.log(fecha);

	await sql.query`
	  MERGE INTO Visitas AS target
	  USING (SELECT ${fecha} AS Fecha) AS source
	  ON target.Fecha = source.Fecha
	  WHEN MATCHED THEN
		UPDATE SET VisitasDiarias = target.VisitasDiarias + 1, VisitasTotales = target.VisitasTotales + 1
	  WHEN NOT MATCHED THEN
		INSERT (Fecha, VisitasDiarias, VisitasTotales) VALUES (source.Fecha, 1, 1);
	`;
}

const obtenerEstadisticas = async () => {
	const result = await sql.query(`
		SELECT
			SUM(VisitasDiarias) AS TotalVisitasDiarias,
			SUM(VisitasTotales) AS TotalVisitasTotales
		FROM Visitas;
	`);
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