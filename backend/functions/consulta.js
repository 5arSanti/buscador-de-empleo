const { sql } = require("../database")

const registrarConsultaVacante = async (fechaHoraConsulta, codigoVacante) => {
	await sql.query`
		INSERT INTO Vacantes_Consultadas (FechaHoraConsulta, CodigoVacante)
		VALUES (${fechaHoraConsulta}, ${codigoVacante});
	`;
};

const obtenerVacantesMasConsultadas = async (cantidad) => {
	try {
		const result = await sql.query`
			SELECT TOP (${cantidad}) CodigoVacante, COUNT(*) AS Consultas
			FROM Vacantes_Consultadas
			GROUP BY CodigoVacante
			ORDER BY Consultas DESC;
		`;

		return result.recordset;
	}
	catch (err) {
		throw new Error(`Error: ${err.message}`);
	}
};

module.exports = { registrarConsultaVacante, obtenerVacantesMasConsultadas };