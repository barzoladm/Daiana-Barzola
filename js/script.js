// Lista de productos disponibles
const productos = [
    { id: 1, nombre: "Lámpara de sal Buda", descripcion: "Descripción breve de la lámpara de sal Buda...", img: "../img/budadia.png", link: "./producto1.html" },
    { id: 2, nombre: "Sahumerios", descripcion: "Descripción breve de los sahumerios...", img: "../img/sahumerios.png", link: "../pages/producto2.html" },
    { id: 3, nombre: "Collar de cuarzo", descripcion: "Descripción breve del collar de cuarzo...", img: "../img/cuarzo.png", link: "../pages/producto3.html" },
    { id: 4, nombre: "Esferas mágicas", descripcion: "Descripción breve del collar de Esferas mágicas...", img: "../img/esferas.png", link: "../pages/producto4.html" },
    { id: 5, nombre: "Hornitos, velas y esencias", descripcion: "Descripción breve del collar de hornitos, velas...", img: "../img/hornivela.png", link: "../pages/producto5.html" },
    { id: 6, nombre: "Porta Sahumerio", descripcion: "Descripción breve de Portasahumerios...", img: "../img/portasahu.png", link: "../pages/producto6.html" },
    { id: 7, nombre: "Lampara de Sal", descripcion: "Descripción breve de Lampara de Sal...", img: "../img/lamparasdesal.png", link: "../pages/producto7.html" }
];

// Función para mostrar los productos en la grilla
function mostrarProductos(productos) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; 

    if (productos.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = "Producto no encontrado";
        gridContainer.appendChild(mensaje);
    } else {
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <img src="${producto.img}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <a href="${producto.link}" target="_blank">Ver más</a>
            `;
            gridContainer.appendChild(div);
        });
    }
}

function filtrarProductos() {
    const termino = document.getElementById('search-input').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino) || 
        producto.descripcion.toLowerCase().includes(termino)
    );
    mostrarProductos(productosFiltrados);
}
document.addEventListener('DOMContentLoaded', function() {
});
document.getElementById('search-input').addEventListener('input', filtrarProductos);

document.getElementById('search-button').addEventListener('click', filtrarProductos);

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    filtrarProductos();
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const nav = document.querySelector('.nav-list');
            nav.classList.toggle('active');
        });
    } else {
        console.error('Element with ID "mobile-menu" not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultados = document.getElementById('searchResults');

    if (searchButton && searchInput && resultados) {
        searchButton.addEventListener('click', function() {
            filtrarProductos(searchInput.value);
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                filtrarProductos(searchInput.value);
            }
        });
    }

    function filtrarProductos(query) {
        // Aquí puedes hacer la lógica para filtrar los productos
        // Por simplicidad, vamos a usar un array de productos de ejemplo
        const productos = [
            { nombre: 'Producto 1' },
            { nombre: 'Producto 2' },
            { nombre: 'Producto 3' }
        ];

        const resultadosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(query.toLowerCase()));
        mostrarProductos(resultadosFiltrados);
    }

    function mostrarProductos(productos) {
        if (resultados) {
            resultados.innerHTML = ''; // Limpia los resultados anteriores
            productos.forEach(producto => {
                resultados.innerHTML += `<div>${producto.nombre}</div>`;
            });
        } else {
            console.error('Elemento #searchResults no encontrado');
        }
    }
});
