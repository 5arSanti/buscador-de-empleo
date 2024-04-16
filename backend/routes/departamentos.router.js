const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const resultQuery = await sql.query`SELECT DISTINCT DEPARTAMENTO FROM Vacantes_Vigentes_Completo`;
        const departments = resultQuery.recordset.map(row => row.DEPARTAMENTO);

		const municipiosQuery = await sql.query`SELECT DISTINCT MUNICIPIO FROM Vacantes_Vigentes_Completo`;
        const municipios = municipiosQuery.recordset.map(row => row.MUNICIPIO);

		return response.status(200).json({
			departments,
			municipios
		});
	}
	catch (err) {
		return response.status(500).json({ message: "Error interno del servidor" });
	}
});


// router.get("/total", async (request, response) => {
//     try {
//         const resultsCountQuery = await sql.query(`
//             SELECT DEPARTAMENTO, COUNT(*) AS total_vacantes
//             FROM Vacantes_Vigentes_Completo
//             GROUP BY DEPARTAMENTO
//         `);
//         const total_departments = resultsCountQuery.recordset.map(row => ({
//             department: row.DEPARTAMENTO,
//             total: row.total_vacantes
//         }));

//         return response.status(200).json({ total_departments });
//     }
// 	catch (err) {
//         console.error('Error fetching results:', err);
//         return response.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router;
