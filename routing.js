//Routing
//Manejar solicitudes del cliente en base a ciertos criterios
//Criterios
//El metodo de la solicitud HTTP, de esta forma el servidor sabe que tipo de operacion se realizara
const http = require('http')
const {infoCursos} = require('./cursos.js')

const servidor = http.createServer((req, res)=>{
    const metodo = req.method;

    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor: ${metodo}`);
            
    }
})

function manejarSolicitudGET(req ,res) {
    const camino = req.url;

    console.log(res.statusCode);
    
    if (camino === '/') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.statusCode = 200;
       return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (camino === '/cursos') {
        res.statusCode = 200;
       return res.end(JSON.stringify(infoCursos))
    }else if (camino === '/cursos/programacion'){
        res.statusCode = 200;
       return res.end(JSON.stringify(infoCursos.programacion))
    }
    res.statusCode = 404;
    res.end('Recurso solicitado no encontrado')
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        let cuerpo = ''
        req.on('data', contenido => {
            cuerpo += contenido.toString()
        })
        req.on('end', () => {
            console.log(cuerpo);
            cuerpo = JSON.parse(cuerpo)
            console.log(cuerpo.titulo);
            
            
            res.end('El servidor ha recibido POST para /cursos/programacion') 
        })

       //return res.end('El servidor ha recibido POST para /cursos/programacion') 
    }
}

const puerto = 3000
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}`);
    
})

