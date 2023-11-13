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
})

router.get("/total", (request, response) => {
    sql.query("SELECT COUNT(*) AS total_registros FROM Vacantes_Vigentes_Completo", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json(results.recordset[0]);
    })
})

// router.get("/resultados", (request, response) => {
//     sql.query("SELECT * FROM Vacantes_Vigentes_Completo ORDER BY FECHA_CREACION DESC OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY", (err, results) => {
//         if (err) {
//             throw err;
//         }
//         return response.status(200).json({resultados: results.recordset});
//     })
// })

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


        const resultCountQuery = await sql.query(`
			SELECT COUNT(*) AS total
			FROM Vacantes_Vigentes_Completo ${filterConditions ? `WHERE ${filterConditions}` : ""}`
		);
		const totalResults = resultCountQuery.recordset[0].total;

		const resultsQuery = await sql.query(baseQuery);
        const totalPages = Math.ceil(totalResults / PAGE_SIZE);

		return response.status(200).json({
			resultados: resultsQuery.recordset,
			totalPages,
			currentPage: page,
		});
	} catch (err) {
		console.error('Error fetching results:', err);
		return response.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;