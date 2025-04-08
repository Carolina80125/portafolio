function abrirModal(src, titulo, descripcion = "Descripción detallada del proyecto.", software = "Blender, Maya", anio = "2023", cliente = "Proyecto personal") {
    const modal = document.getElementById('miModal');
    const modalImg = document.getElementById('modal-imagen');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDesc = document.getElementById('modal-descripcion');
    const modalSoftware = document.getElementById('modal-software');
    const modalAnio = document.getElementById('modal-anio');
    const modalCliente = document.getElementById('modal-cliente');
    
    modal.style.display = "flex";
    modalImg.src = src;
    modalTitulo.textContent = titulo;
    modalDesc.textContent = descripcion;
    modalSoftware.textContent = software;
    modalAnio.textContent = anio;
    modalCliente.textContent = cliente;
    
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) {
        cerrarModal();
    }
}