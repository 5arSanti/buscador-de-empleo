const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.post("/add", async (request, response) => {
	try {
        const { Nombre, Correo, Numero } = request.body;
        // Query de inserción
        const result = await sql.query`INSERT INTO Suscripciones (Nombre, Correo, Celular) VALUES (${Nombre}, ${Correo}, ${Numero})`;

        // Devolver una respuesta (puedes personalizar según tus necesidades)
        return response.status(200).json({ message: 'Suscripción exitosa', result });
    }
	catch (err) {
        console.error('Error al insertar en la base de datos:', err);
        return response.status(500).json({ message: 'Error interno del servidor' });
	}
});

module.exports = router;