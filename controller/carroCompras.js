function borrarElemento(icono) {
    var producto = icono.parentNode;
    if (producto.classList.contains('Producto')) {
        producto.remove();
        console.log('Producto borrado:');
    } else {
        console.log('No se encontró el producto');
    }
}

