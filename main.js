// Variables para el carrusel principal
document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel-imagenes');
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    const btnPrev = document.querySelector('.carrusel-boton.prev');
    const btnNext = document.querySelector('.carrusel-boton.next');
    let indiceActual = 0;
    const totalImagenes = imagenes.length;
  
    // Función para actualizar la posición del carrusel
    function actualizarCarrusel() {
      const desplazamiento = -indiceActual * 100;
      carrusel.style.transform = `translateX(${desplazamiento}%)`;
    }
  
    // Event listeners para los botones
    btnPrev.addEventListener('click', function() {
      indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
      actualizarCarrusel();
    });
  
    btnNext.addEventListener('click', function() {
      indiceActual = (indiceActual + 1) % totalImagenes;
      actualizarCarrusel();
    });
  
    // Inicializar el carrusel
    actualizarCarrusel();
  
    // Opcional: Navegación con teclado
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        btnPrev.click();
      } else if (e.key === 'ArrowRight') {
        btnNext.click();
      }
    });
  });


// Variables para controlar la galería interna
let currentGalleryIndex = 0;

// Función para abrir el modal con galería
function abrirModal(proyectoId) {
    const proyecto = proyectos[proyectoId];
    const modal = document.getElementById('miModal');
    
    // Configurar texto
    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    document.getElementById('modal-software').textContent = proyecto.software;
    document.getElementById('modal-año').textContent = proyecto.año;
    document.getElementById('modal-cliente').textContent = proyecto.cliente;
    
    // Configurar galería
    const galeria = document.querySelector('.galeria-imagenes');
    galeria.innerHTML = '';
    
    proyecto.imagenes.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = proyecto.titulo;
        galeria.appendChild(img);
    });
    
    // Mostrar modal
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
    
    // Inicializar posición del carrusel
    currentGalleryIndex = 0;
    updateGalleryPosition();
}

function moverGaleria(direction) {
    const galeria = document.querySelector('.galeria-imagenes');
    const imagenes = galeria.querySelectorAll('img');
    
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex >= imagenes.length) currentGalleryIndex = 0;
    if (currentGalleryIndex < 0) currentGalleryIndex = imagenes.length - 1;
    
    updateGalleryPosition();
}

function updateGalleryPosition() {
    const galeria = document.querySelector('.galeria-imagenes');
    galeria.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) {
        cerrarModal();
    }
}