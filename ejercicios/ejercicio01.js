// Importar el módulo http
const http = require('http');

// Definir una constante PORT con el valor 3000
const PORT = 3000;

// Crear un servidor HTTP utilizando la función createServer
const server = http.createServer((req, res) => {
    // Escribir el encabezado de respuesta
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Escribir el contenido de la respuesta
    res.end('Curso Node.js\n');
});

// Llamar al método listen de server
server.listen(PORT, () => {
    // Imprimir en la consola cuando el servidor esté escuchando
    console.log(`Server listening on port ${PORT}`);
});
