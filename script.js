// Datos de los proyectos (estructura completa)
const proyectos = {
    "proyecto1": {
        titulo: "La autuconstrucción como resistencia en la colonia Las Tinajas, Cujimalpa",      
        descripcion: "Este proyecto investiga los procesos de autoconstrucción en la colonia Las Tinajas (Cuajimalpa, CDMX) mediante cartografía crítica y metodologías participativas, con el objetivo de visibilizar las dinámicas socioespaciales que definen la producción informal de vivienda.",
        programas: "Autocad, Illustrator",
        año: "2024",
        cliente: "Proyecto universitario",
        imagen: "img/POSTERCUAJI-1.png",
        enlace: "https://drive.google.com/file/d/1pHXklARqp8HInDPZE8bW0QJNBPwx1UWP/view?usp=sharing"
    },
    "proyecto2": {
        titulo: "NUGO, manual de identidad gráfica",
        descripcion: "NUGO propone un sistema de identidad gráfica integral que aborda los desafíos nutricionales del entorno corporativo mediante un lenguaje visual innovador, combinando la seriedad del mundo empresarial con soluciones alimenticias prácticas y un tono comunicacional fresco.",
        programas: "Illustrator",
        año: "2024",
        cliente: "Proyecto universitario",
        imagen: "img/infografia_nugo-1.png",
        enlace: "https://drive.google.com/file/d/1C7y4ucUg8P43gP_yQSlEDufvMGhWVtuW/view?usp=sharing"
    },
    "proyecto3": {
        titulo: "Cuarto de renta y mesa deslizable",        
        descripcion: "Un lugar que brinde el entorno perfecto para aprender y crecer, sin las preocupaciones de un alquiler complicado, servicios costosos o conflictos entre compañeros de piso. Nuestro objetivo es simple: ofrecer un hogar lejos del hogar, donde lo único en lo que debas concentrarte sea en tu crecimiento académico.",
        programas: "SketchUp",
        año: "2022",
        cliente: "Proyecto universitario",
        imagen: "img/Cuarto.png",
        enlace: "https://drive.google.com/file/d/1yn0ZsR7TcJJGtLUK74SLKFcf_rsnY23a/view?usp=sharing"
    },
    "proyecto4": {
        titulo: "Señal luminosa automática",        
        descripcion: "Diseñada para mejorar la seguridad y accesibilidad en los estacionamientos de la UAM-C (niveles 2 y 3), esta señal guía de manera clara y automática hacia las escaleras de emergencia, optimizando la protección civil y cumpliendo con normativas vigentes.",
        programas: "Illustrator, AutoCad, 3Ds max, Photoshop",
        año: "2024",
        cliente: "Trabajo universitario",
        imagen: "img/señal.png",
        enlace: "https://drive.google.com/file/d/1CN_FKb9fmyg6P3BeJS_c0jsurv6b5u9n/view?usp=sharing"
    },
    "proyecto5": {
        titulo: "Juguete para huevo kinder, seños de verduras",       
        descripcion: "Diseño de conjunto de seños con forma de verduras, untercambiables y coleccionables.",
        programas: "Photoshop, Illustrator, AutoCad, 3Ds max",
        año: "2024",
        cliente: "Proyecto universitario",
        imagen: "img/Poster-1.png",
        enlace: "https://drive.google.com/drive/folders/1XW41UUVmMpz2hDbaUjx6CeU2U1PbG5MS?usp=sharing"
    },
    "proyecto6": {
        titulo: "Diseño de empaque y KeyVisual",        
        descripcion: "Diseño de empaque para taza coleccionable y KeyVisual de campaña publicitaria",
        programas: "Illustrator, Phtoshop",
        año: "2023",
        cliente: "Proyecto universitario",
        imagen: "img/Key Visual-1.png",
        enlace: "https://drive.google.com/drive/folders/1sSpF1wFShraVHhVmWT_Idj0mMqYW9T3u?usp=sharing"
    },
    "proyecto7": {
        titulo: "Key Visual y diseño de botella para la marca Frutos de vida",        
        descripcion: "Diseño de imagen principal para campaña publicitaria",
        programas: "Photoshop, Illustrator, Autocad, 3Ds max",
        año: "2024",
        cliente: "Proyecto universitario",
        imagen: "img/ESCENA1.png",
        enlace: "https://drive.google.com/drive/folders/1AAevoIzE4SgIwC_wEji8hbInVXQk6xXv?usp=sharing"
    },
    "proyecto8": {
        titulo: "Diseño Braille",        
        descripcion: "Sistema de señalización con inclusión braille",
        programas: "Autocad, 3Ds max, Illustrator",
        año: "2024",
        cliente: "Proyecto de accesibilidad",
        imagen: "img/Braile.png",
        enlace: "https://drive.google.com/file/d/1yw6pwOnMKHBn0W-W7f46UtRLdwQq93Xh/view?usp=sharing"
    }
};

// Variables globales
let currentSlide = 0;
const slides = document.querySelectorAll('.carrusel-item');
const totalSlides = slides.length;
const carruselInner = document.querySelector('.carrusel-inner');
const modal = document.getElementById('miModal');

// Funciones del modal
function abrirModal(projectId) {
    const proyecto = proyectos[projectId];

    if (!proyecto) {
        console.error('Proyecto no encontrado:', projectId);
        return;
    }
    const modalFooter = document.querySelector('.modal-footer');
    modalFooter.innerHTML = '';//clean modal footer

    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    document.getElementById('modal-programas').textContent = proyecto.programas;
    // Crear y configurar el botón "Ver más"
    const verMasButton = document.createElement('a');
    verMasButton.href = proyecto.enlace;
    verMasButton.textContent = "Ver más";
    verMasButton.classList.add('ver-mas-button');
    verMasButton.style.display = 'inline-block';

    // Insertar el botón en el modal-footer
    modalFooter.appendChild(verMasButton);

    document.getElementById('modal-ano').textContent = proyecto.año;
    document.getElementById('modal-cliente').textContent = proyecto.cliente;
    const modalImg = document.querySelector('.modal-imagen img');
    modalImg.src = proyecto.imagen;
    modalImg.alt = proyecto.titulo;
    modal.style.display = 'flex';



    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    const modalFooter = document.querySelector('.modal-footer');
    document.body.style.overflow = 'auto';
    modalFooter.innerHTML = '';//clean modal footer
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Configurar eventos del carrusel
    document.querySelector('.carrusel-boton.prev').addEventListener('click', prevSlide);
    document.querySelector('.carrusel-boton.next').addEventListener('click', nextSlide);

    // Configurar eventos del modal
    document.querySelector('.cerrar-modal').addEventListener('click', closeModal);

    // Event delegation for carrousel items
    carruselInner.addEventListener('click', (event) => { 
        event.stopPropagation()
        const carruselItem = event.target.closest('.carrusel-item');
        if (carruselItem) {
            const projectId = carruselItem.dataset.project;
            abrirModal(projectId);
        }
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// Funciones del carrusel
function updateCarousel() {
    carruselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}