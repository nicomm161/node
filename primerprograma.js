function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//Exportaremos estas funciones
function saludarHolaMundo() {
    return 'Hola, Mundo';
}
//Con esto exportamos el modulo de nuestra funcion a otro lado
// module.exports.saludar= saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;


//Para ejectutar desde la consola abrimos la consola en esta ruta y seleccionamos este archivo, para ejecutarlo node "nombre archivo"

//Exportaremos varias funciones a nuestro fichero
//Objeto para poder exportar varias funciones
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};


