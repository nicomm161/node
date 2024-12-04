const http = require ('http')


// const servidor = http.createServer((req, res) =>{
//     console.log('Solicitud nueva');
    
//     //Proceso
//     res.end('Hola, mundo');
// })
// const puerto = 3000
// servidor.listen(puerto, () =>{
//     console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
    
// })

//req y res

const servidor = http.createServer((req,res) =>{
    
    // console.log('===> req(solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    console.log('===> res(respuesta)');
    // console.log(res.statusCode); //200 ok
    // res.statusCode = 404;
    // console.log(res.statusCode); //404 Not Found
    res.setHeader('Content-Type', 'application/json')
    console.log(res.getHeaders());
    
    res.end('Hola, mundo');  
})

const puerto = 3000
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
    
})