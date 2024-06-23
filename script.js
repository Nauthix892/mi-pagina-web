// Lista de URLs de imágenes de fondo
const backgroundImages = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg'
];

let currentBackgroundIndex = 0;
const backgroundChangeInterval = 5000; // Intervalo de cambio en milisegundos (5 segundos)

// Función para cambiar dinámicamente la imagen de fondo con efecto de parallax suave
function changeBackgroundImageWithParallaxSmooth() {
    // Calcula la posición de desplazamiento parallax
    const parallaxPosition = (window.scrollY / window.innerHeight) * 100;

    // Aplica transición suave al cambiar la imagen de fondo
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = `center ${parallaxPosition}%`;

    // Incrementa el índice de la imagen de fondo
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
}

// Cambiar la imagen de fondo inicialmente
changeBackgroundImageWithParallaxSmooth();

// Cambiar la imagen de fondo en intervalos de tiempo
setInterval(changeBackgroundImageWithParallaxSmooth, backgroundChangeInterval);

// Obtener referencia al formulario y a las listas de productos por categoría
const form = document.getElementById('add-product-form');
const electronicsList = document.getElementById('electronics-products');
const animeList = document.getElementById('anime-products');
const machinesList = document.getElementById('machines-products');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto de envío del formulario

    // Obtener los valores del formulario
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];
    const productCategory = document.getElementById('product-category').value;

    // Crear un nuevo elemento de producto
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    // Crear elementos para mostrar la información del producto
    const nameElement = document.createElement('h3');
    nameElement.textContent = productName;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Precio: S/ ${productPrice}`;

    const imageElement = document.createElement('img');
    const reader = new FileReader();
    reader.onload = function(e) {
        imageElement.src = e.target.result;
        imageElement.alt = productName;
    };
    reader.readAsDataURL(productImage);

    // Agregar elementos al contenedor del producto
    productItem.appendChild(nameElement);
    productItem.appendChild(priceElement);
    productItem.appendChild(imageElement);

    // Agregar el nuevo producto a la lista correspondiente según la categoría
    if (productCategory === 'electronics') {
        electronicsList.appendChild(productItem);
    } else if (productCategory === 'anime') {
        animeList.appendChild(productItem);
    } else if (productCategory === 'machines') {
        machinesList.appendChild(productItem);
    }

    // Limpiar el formulario
    form.reset();
});
