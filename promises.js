//Promesas
//Es un objecte que representa el eventual resultat o error en una operacio asincrona
//Las promesas permiten interactuar con operaciones para el servidor

//Callback function
//Es una funcion que pasa a otra funcion como argumento y luego se ejecuta dentro de la funcion externa

//Las promesas tienen un método .then(), con el cual podemos decidir qué ocurre cuando se completa la promesa (éxito o error)
const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('Promesa resuelta');
        }else{
        reject('Promesa rechazada');
        }
    }, 3000);
});


const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (error) => {
    console.log(error);
    
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)

const estatusPedido = () =>{
    const estatus = Math.random() < 0.8;
    console.log(estatus);  
    return estatus
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido realizado');
        }else{
        reject('Pedido cancelado');
        }
    }, 3000)
})

miPedidoDePizza.then(manejarPromesaCumplida, manejarPromesaRechazada)


//.catch() Método de promesa que solo se ejecuta si la promesa es rechazada

miPedidoDePizza.then(manejarPromesaCumplida).catch(manejarPromesaRechazada)

//Async await

function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando ${producto} de Nico Mesa`);
        setTimeout(() =>{
            if (producto === 'taza') {
                resolve(`Ordenando la taza de Nico`);
                
            }else{
                reject('Producto no disponible');
            }
        }, 2000)	
        
    });
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log(`Procesando pedido de ${respuesta}`);
        setTimeout(() => {
            resolve('Gracias por tu compra disfruta de tu producto de Nico Mesa');
        }, 4000);
    });
    
}

ordenarProducto('taza').then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta)
}).then(respuestaProcesada => {
    console.log(respuestaProcesada);
}).catch(error => {
    console.log(error);
    
})

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    
  } catch (error) {
    console.log(error);
    
  }
}

realizarPedido('taza');