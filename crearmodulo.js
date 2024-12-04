//Traemos el objeto saludar mundo y saludar de nuestro JS
const { saludar, saludarHolaMundo} = require('./primerprograma.js');
//Colocamos nuestro require y la ruta a nuestra exportación
// const primerprograma = require('./primerprograma.js');

//Podemos llamar a nuestra funcion 
// console.log( primerprograma.saludar('Nico'));
// console.log( primerprograma.saludarHolaMundo());
//Imprimimos el objeto
console.log(saludarHolaMundo());
console.log(saludar('Nico'));

