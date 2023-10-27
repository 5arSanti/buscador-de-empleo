const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    sql.query("SELECT * FROM Vacantes_Vigentes_Completo ORDER BY FECHA_CREACION DESC OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json(results.recordset);
    })
})



module.exports = router;