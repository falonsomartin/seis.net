const express = require('express');
const odbc = require('odbc');
const path = require('path');

const app = express();

// Ruta del archivo .mdb
const dbPath = path.join(__dirname, 'data', 'evenor.mdb');

// Conexión ODBC
const connectionString = `Driver={Microsoft Access Driver (*.mdb)};DBQ=${dbPath};`;

app.get('/data', async (req, res) => {
    try {
        const connection = await odbc.connect(connectionString);
        const result = await connection.query('SELECT * FROM MENSUAL');
        await connection.close();

        res.json(result);
    } catch (err) {
        res.status(500).send(`Error al conectar: ${err.message}`);
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});