const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.post("/add", async (request, response) => {
	try {
		const { Nombre, Correo, Numero } = request.body;

		// Verificar si Nombre y Correo no están vacíos
		if (Nombre.trim() === "" || Correo.trim() === "") {
			return response.status(400).json({ message: 'Nombre y Correo son obligatorios' });
		}

		// Verificar si el correo ya existe en la base de datos
		const existingEmailResult = await sql.query`SELECT COUNT(*) AS count FROM Suscripciones WHERE Correo = ${Correo}`;
		const existingEmailCount = existingEmailResult.recordset[0].count;

		if (existingEmailCount > 0) {
			return response.status(400).json({ message: 'El correo ya está registrado' });
		}

        const result = await sql.query`INSERT INTO Suscripciones (Nombre, Correo, Celular) VALUES (${Nombre}, ${Correo}, ${Numero})`;


        return response.status(200).json({
			message: 'Suscripción exitosa',
			result
		});
    }
	catch (err) {
        return response.status(500).json({ message: err.message });
	}
});


router.post("/delete", async (request, response) => {
    try {
        const { Correo } = request.body;

        // Verificar si el correo está vacío
        if (Correo.trim() === "") {
            return response.status(400).json({ message: 'No se proporcionó un correo válido' });
        }

        // Verificar si el correo existe en la base de datos
        const existingEmailResult = await sql.query`SELECT COUNT(*) AS count FROM Suscripciones WHERE Correo = ${Correo}`;
        const existingEmailCount = existingEmailResult.recordset[0].count;

        if (existingEmailCount === 0) {
            return response.status(404).json({ message: 'El correo no está registrado' });
        }

        // Eliminar el registro con el correo proporcionado
        const deleteResult = await sql.query`DELETE FROM Suscripciones WHERE Correo = ${Correo}`;

        return response.status(200).json({
            message: 'Eliminado exitosamente',
            deleteResult
        });
    } catch (err) {
        return response.status(500).json({ message: err.message });
    }
});
module.exports = router;