//Modulos principales o modulos built-in son modulos que puedes usar directamente al trabajar con Node.JS sin instalarlos
//Muy útiles para realizar tareas comunes al trabajar con Node.js
//Http, Https, fs, os y path
//Console es una modulo built-in que implementa funcionalidad similar a la consola de un navegador web
console.log('Hola,Mundo');
console.warn('Ocurrio un error ...');
console.error('Ocurrio un error');
console.error(new Error ('Ocurrio un error'));

//Modulo process
//Provee información sobre el proceso de Node.js que se está ejecutando
//También puede tener cierto control sobre el proceso
console.log(process);
//Nos retorna un objeto mas preciso de process
console.log(process.env);

console.log(process.argv);
//Nos devuelve un array al ejecutarlo donde contiene 4 posiciones
//[node, primerprograma.js, 6, 7]
//  0       1               2  3
 // Para imprimirlo por pantalla
for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);

}
//Para mostrar el uso de la memoria
console.log(process.memoryUsage());

//Modulo OS
//Contiene funcionalidad pafra obtener informacion sobre el SO en el cual se ejecuta la aplicacion
const os = require('os');

//Muestra el tipo de sistema operativo
console.log(os.type());
//Directorio principal
console.log(os.homedir());
//Segundos desde que se inició el SO
console.log(os.uptime());
//Informacion sobre el usuario
console.log(os.userInfo());

//Modulo Timers
//Temporizador, contiene funciones que ejecutan codigo luego de un cierto periodo de tiempo
//setTimeout() para ejecutar código luego de un número específico de milisegundos
//Sintaxis setTimeout(funcion, retraso, argumento1, argumento2)
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
    
}
mostrarTema('Node.js')
//Retrasa la funcion 1 segundo
setTimeout(mostrarTema, 1000, 'Node.js')
//HAce que la funcion se ejecute al instante
setImmediate(mostrarTema, 'Node.js')
//Para ejecutar codigo un numero infinito de veces con un retraso específico de milisegundos
// setInterval(mostrarTema, 1500, 'Node.js')

//Modulo file system
//Contiene la funcionalidad para trabajr con el sistema de archivos
const fs = require('fs')

//Para poder imprimir por consola este fichero se hace de esta manera
fs.readFile('index.html', 'utf-8', (err, contenido) =>{
    if (err) {
        console.log(err);
                
    } else {
        console.log(contenido);
        
    }
})

fs.rename('index.html', 'main.html', (err) =>{
    if (err) {
        console.log(err);
        
    }

    console.log('Nombre cambiado correctamente');
    
})

//Agregar contenido al final de un archivo

fs.appendFile('main.html', '<p> Hola </p>', (err)=>{
    if (err) {
        console.log(err);
    }

    console.log('Contenido anadido');   
});


//Reemplazar todo el contenido del archivo.

fs.writeFile('main.html', 'contenido nuevo', (err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log('Contenido reemplazado');
    
});

//Eliminar archivos

fs.unlink('main.html', (err) =>{
    if (err) {
        console.log(err);
        
    }
    console.log('Eliminado');
    
})

const archivo = fs.readFileSync('index.html', 'utf-8')
console.log(archivo);