const curso = require('./curso.json')
//Objeto de JSON exportado a JS
console.log(curso);

//JSON dentro de JS
let infoCurso ={
    "titulo" : "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas" : [
        "JavaScript","Node.js"
    ],
    "esPublico" : true
}

console.log(infoCurso);

//String
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON);

let infoCursoObjeto =JSON.parse(infoCursoJSON);

//Objeto
console.log(infoCursoObjeto);

//Nos devuelve el titulo del JSON
console.log(infoCursoObjeto.titulo);
