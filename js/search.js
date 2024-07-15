
const productos = [
    { id: 1, nombre: 'Lampara de Sal - Buda', descripcion: 'Descripción del Producto 1' },
    { id: 2, nombre: 'Sahumerios', descripcion: 'Descripción del Producto 2' },
    { id: 3, nombre: 'Cuarzo Cristal', descripcion: 'Descripción del Producto 3' },
    { id: 4, nombre: 'Esferas Màgicas premium X4', descripcion: 'Descripción del Producto 4' },
    { id: 5, nombre: 'Hornitos, velas, esencias', descripcion: 'Descripción del Producto 5' },
    { id: 6, nombre: 'Porta sahumerios Box', descripcion: 'Descripción del Producto 6' },
    { id: 7, nombre: 'Lámparas de Sal', descripcion: 'Descripción del Producto 6' },

];

const searchInput = document.querySelector('.search-input');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    const filteredProducts = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(query) || 
        producto.descripcion.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(producto => {
            const productElement = document.createElement('div');
            productElement.className = 'product-result';
            productElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
            `;
            searchResults.appendChild(productElement);
        });
    } else {
        searchResults.innerHTML = '<p>No se encontraron productos.</p>';
    }
});
