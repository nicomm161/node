//Eventos para node
const EventEmitter = require('events')

const emisorProdcutos = new EventEmitter();

emisorProdcutos.on('comprar', (total, numProductos) => {
    console.log(`Se realizó una compra de ${total} € con ${numProductos} productos` );
})

emisorProdcutos.emit('comprar', 500, 5);
emisorProdcutos.emit('comprar', 700, 4);
emisorProdcutos.emit('comprar', 800, 6);


