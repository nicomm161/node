//Cliente-Servidor 
//Modelo que usamos para acceder a internet y obtener recursos e informacion
//Cliente es el navegador desde el cual se realizan solicitudes a un servidor
//Programa que se ejecuta en un server físico para ofrecer un servicio al cliente. Envía información
//El servidor conoce el formato esperado del mensaje que recibe del servidor
//Protocolo es un conjunto de reglas que permiten transmitir información entre dispositivos de una red
//Protocolo HTTP es un protocolo de transferencia de hipertexto
//Solicitudes HTTP
//Headers (cabeceras) proveen informacion adicional sobre la solicitud
//Body contiene la informacion que debe ser enviada al servidor para procesar la solicitud
//No incluye en todas las solicitudes solo en aquellas que requieran enviar información. Por ejemplo: POST, PUT.
//Metodos HTTP verbo o sustantivo que indica la intención de la solicitud
//GET, POST, PUT, DELETE
//GET sirve para solicitar un recurso especifico
//POST sirve para crear un recurso especifico, por ejemplo agregar un usuario nuevo a una base de datos
//PUT sirve para modificar un recurso en especifico por ejemplo hacer un cambio en la base de datos
//Delete sirve para eliminar un recurso en especifico
//Respuestas HTTP
//Headers son opcionales y proveen información adicional sobre la respuesta
//Body contiene la informacion que debe ser enviada desde el servidor al cliente
//Codigos de estado HTTP
//Los codigos de estado de respuesta HTTP son numeros que indican si se ha compleyado exitosamente la solicitud HTTP
//Respuestas informativas (100-199)
//Respuestas satisfactorias (200-299)
//Redirecciones (300-399)
//Errores de los clientes (400-499)
//Errores de los servidores (500-599)
//Con Node.JS y Express podemos especificar el código de estado de la respuesta HTTP en nuestro servidor
//Más comunes
// 200 OK - La respuesta fue exitosa
// 400 Bad Request - El servidor no pudo interpretar la solicitud
// 404 Not Found - El servidor no pudo encontrar el recurso solicitado
// 500 Internal Server Error - El servidor encontró una situación que no sabe cómo manejar
//Modulo HTTP
//Este modulo le permite a Node.js transmitir la informacion con el protocolo HTTP
//Puerto es la ubicación virtual del SO en la cual se puede acceder a una aplicación o proceso especifico que se este ejecutando en ese puerto