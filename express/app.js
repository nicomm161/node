//Inicializamos express
const express = require('express')
//Definimos nuestra app
const app = express()
//Traemos el objeto infoCursos
const{infoCursos} = require('./cursos.js')



//En la ruta raiz enviamos un mensaje
app.get('/', (req, res) => {
   res.send('Mi primer servidor, Nico Mesa')
})
//En la ruta cursos enviamos la informacion de cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})
//En la ruta cursos/programacion enviamos la informacion de programacion
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})

app.get('api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
   if (resultados.length === 0) {
    return res.status(404).send('No se encontraron resultados')
   }
   
    res.send(JSON.stringify(resultados))
})


//Definimos el puerto
const PUERTO = process.env.PORT || 3000
//Arrancamos el servidor
app.listen(PUERTO,() =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO} ...`);
    
})


