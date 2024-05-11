// Importando Express
import express from 'express';

const app = express();

app.get('/', ( req, res ) => {
    res.status(200).send('Formacion Node + Express + MongoDb, usando Express');
});

export default app;