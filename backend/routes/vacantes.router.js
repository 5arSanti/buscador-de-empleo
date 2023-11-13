const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    sql.query("SELECT * FROM Vacantes_Vigentes_Completo ORDER BY CODIGO_VACANTE DESC OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json(results);
    })
});

const PAGE_SIZE = 50; // Número de resultados por página

router.get("/resultados", async (request, response) => {
	try {
		const page = parseInt(request.query.page, 10) || 1;
		const offset = (page - 1) * PAGE_SIZE;

		const filterConditions = Object.keys(request.query)
            .filter((key) => key !== "page" && request.query[key] !== "") // Excluir el parámetro de página
            .map((key) => `${key} = '${request.query[key]}'`)
            .join(" AND ");

		const baseQuery = `
            SELECT *
            FROM Vacantes_Vigentes_Completo
            ${filterConditions ? `WHERE ${filterConditions}` : ""}
            ORDER BY CODIGO_VACANTE DESC
            OFFSET ${offset} ROWS
            FETCH NEXT ${PAGE_SIZE} ROWS ONLY
        `;

		// TOTAL REGISTROS SEGUN BUSQUUEDA
        const resultCountQuery = await sql.query(`
			SELECT COUNT(*) AS total_registros
			FROM Vacantes_Vigentes_Completo ${filterConditions ? `WHERE ${filterConditions}` : ""}`
		);
		const total_registros = resultCountQuery.recordset[0].total_registros;

		// TOTAL REGISTROS GLOBALES
		const totalRegistrosQuery = await sql.query(`SELECT COUNT(*) AS total FROM Vacantes_Vigentes_Completo`);
		const total = totalRegistrosQuery.recordset[0].total;

		const resultsQuery = await sql.query(baseQuery);
        const totalPages = Math.ceil(total_registros / PAGE_SIZE);

		return response.status(200).json({
			resultados: resultsQuery.recordset,
			totalPages,
			currentPage: page,
			total_registros,
			total
		});
	}
	catch (err) {
		console.error('Error fetching results:', err);
		return response.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;