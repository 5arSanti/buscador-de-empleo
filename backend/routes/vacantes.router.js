const express = require("express");
const { sql } = require("../database");
const { filterDateCondition } = require("../functions/fecha");
const { filterExperienceCondition } = require("../functions/experiencia");

const router = express.Router();

const PAGE_SIZE = 50; // Número de resultados por página

router.get("/resultados", async (request, response) => {
	try {
        const page = parseInt(request.query.page, 10) || 1;
        const offset = (page - 1) * PAGE_SIZE;

		const fechaCreacion = request.query.FECHA_PUBLICACION || "";
        const searchTerm = request.query.BUSQUEDA || '';
		const descriptionFilter = request.query.DESCRIPCION_VACANTE || '';
        const experienceMonth = request.query.MESES_EXPERIENCIA_CARGO || "";


        const filterConditions = Object.keys(request.query)
            .filter((key) => key !== "page" && request.query[key] !== "" && key !== "FECHA_PUBLICACION" && key !== "BUSQUEDA" && key !== "DESCRIPCION_VACANTE" && key !== "MESES_EXPERIENCIA_CARGO")
            .map((key) => `${key} = '${request.query[key]}'`)
            .join(" AND ");

        const aditionalFilters = `
            WHERE LOWER(BUSQUEDA) LIKE LOWER('%${searchTerm}%')
            AND (DESCRIPCION_VACANTE) LIKE ('%${descriptionFilter}%')
            ${filterConditions ? `AND ${filterConditions}` : ""}
            ${filterDateCondition(fechaCreacion)}
            ${filterExperienceCondition(experienceMonth)}
        `

        // QUERY BASE
        const baseQuery = `
            SELECT *
            FROM Vacantes_Vigentes_Completo
            ${aditionalFilters}

            ORDER BY FECHA_PUBLICACION DESC
            OFFSET ${offset} ROWS
            FETCH NEXT ${PAGE_SIZE} ROWS ONLY
        `;

		// TOTAL REGISTROS SEGUN BUSQUUEDA
        const totalRecordsBySearchQuery = await sql.query(`
            SELECT COUNT(*) AS total_registros
            FROM Vacantes_Vigentes_Completo
            ${aditionalFilters}
			`
        );
        const total_registros = totalRecordsBySearchQuery.recordset[0].total_registros;


		// TOTAL REGISTROS GLOBALES
        const totalRegistrosQuery = await sql.query(`
			SELECT COUNT(*) AS total FROM Vacantes_Vigentes_Completo
		`);
        const total = totalRegistrosQuery.recordset[0].total;

		// TOTAL REGISTROS POR DEPARTAMENTO
        const totalRecordsByDepartmentQuery = await sql.query(`
            SELECT DEPARTAMENTO, COUNT(*) AS total_vacantes
            FROM Vacantes_Vigentes_Completo
            ${aditionalFilters}
            GROUP BY DEPARTAMENTO
        `);
        const total_departments = totalRecordsByDepartmentQuery.recordset.map(row => ({
            department: row.DEPARTAMENTO,
            total: row.total_vacantes
        }));

		// TOTAL REGISTROS POR MUNICIPIO
        const totalRecordsByMunicipalityQuery = await sql.query(`
            SELECT MUNICIPIO, COUNT(*) AS total_vacantes
            FROM Vacantes_Vigentes_Completo
            ${aditionalFilters}
            GROUP BY MUNICIPIO
        `);
        const total_municipios = totalRecordsByMunicipalityQuery.recordset.map(row => ({
            municipio: row.MUNICIPIO,
            total: row.total_vacantes
        }));


        const resultsQuery = await sql.query(baseQuery);
        const totalPages = Math.ceil(total_registros / PAGE_SIZE);

        return response.status(200).setHeader('Content-Type', 'application/json; charset=utf-8').json({
            resultados: resultsQuery.recordset,
            totalPages,
            currentPage: page,
            total_registros,
            total,
            total_departments,
			total_municipios
        });
    }
    catch (err) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/date", async (request, response) => {
	try {
        const date = await sql.query("SELECT MAX(FECHA_PUBLICACION) FROM Vacantes_Vigentes_Completo")
		const max_date = date.recordset[0][""];

		return response.status(200).json({max_date})
    }
    catch (err) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;