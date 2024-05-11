// Importando Express
import express from 'express';

// Creando una instancia de Express
const app = express();

// Definiendo una ruta GET para el endpoint '/'
app.get('/', (req, res) => {
    // Respondiendo con un status 200 y enviando un mensaje
    res.status(200).send('Formacion Node + Express + MongoDb, usando Express');
});

// Exportando la aplicación Express para su uso en otros archivos
export default app;
