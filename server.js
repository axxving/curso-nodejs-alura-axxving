// Importando el módulo HTTP
import http from 'http';

// Definición de un objeto con rutas y sus respectivos mensajes
const rutas = {
    '/' : 'Formacion Node + Express + MongoDB',
    '/autores' : 'Estos son los autores',
    '/libros' : 'Estos son los libros',
}

// Creación de un servidor HTTP con una función de callback para manejar las solicitudes
const server = http.createServer((req, res) => {

    // Imprimiendo los encabezados de la solicitud en la consola
    console.log(req.headers);

    // Escribiendo el encabezado de la respuesta HTTP
    // Estado de la respuesta: 200 (OK)
    // Tipo de contenido: texto plano
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Enviando el contenido de la respuesta basado en la URL solicitada
    res.end(rutas[req.url]);

});

// Haciendo que el servidor escuche en el puerto 3000
server.listen(3000, () => {

    // Imprimiendo un mensaje en la consola cuando el servidor se inicia
    console.log("Servidor iniciado");

});
