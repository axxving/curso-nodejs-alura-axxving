// Importando Express
import express from 'express';

// Creando una instancia de Express
const app = express();

// Definiendo un array de libros
const librosActuales = [
    {
        id: 1,
        titulo: "El señor de los anillos",
    },
    {
        id: 2,
        titulo: "don Quijote",
    },
    {
        id: 3,
        titulo: "Puente a Terabithia",
    },
];

// Definiendo una ruta GET para el endpoint '/'
app.get('/', (req, res) => {
    // Respondiendo con un status 200 y enviando un mensaje
    res.status(200).send('Formacion Node + Express + MongoDb, usando Express');
});

// Definiendo una ruta GET para el endpoint '/libros'
app.get('/libros', (req, res) => {
    // Respondiendo con un status 200 y enviando el array de libros en formato JSON
    res.status(200).json(librosActuales);
});

// Exportando la aplicación Express para su uso en otros archivos
export default app;
