const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/total", (request, response) => {
    sql.query("SELECT COUNT(*) AS total_registros FROM Vacantes_Vigentes_Completo", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json(results.recordset[0]);
    })
})

router.get("/resultados", (request, response) => {
    sql.query("SELECT * FROM Vacantes_Vigentes_Completo ORDER BY FECHA_CREACION DESC OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json({resultados: results.recordset});
    })
})



module.exports = router;