// Importando la aplicación Express desde './src/app.js'
import app from './src/app.js';

// Definiendo el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Iniciando el servidor Express y haciendo que escuche en el puerto especificado
app.listen(PORT, () => {
    // Imprimiendo un mensaje en la consola una vez que el servidor esté iniciado
    console.log('Servidor con express iniciado');
});
