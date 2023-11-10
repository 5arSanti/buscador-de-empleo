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
	console.log("Entra")
	try {
		const page = parseInt(request.query.page, 10) || 1;
		const offset = (page - 1) * PAGE_SIZE;

		const resultCountQuery = await sql.query("SELECT COUNT(*) AS total FROM Vacantes_Vigentes_Completo");
		const totalResults = resultCountQuery.recordset[0].total;

		const resultsQuery = await sql.query(`
			SELECT *
			FROM Vacantes_Vigentes_Completo
			ORDER BY CODIGO_VACANTE DESC
			OFFSET ${offset} ROWS
			FETCH NEXT ${PAGE_SIZE} ROWS ONLY
		`);

		const totalPages = Math.ceil(totalResults / PAGE_SIZE);

		console.log(totalPages, page)
		console.log("ENTRA RETURN");
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