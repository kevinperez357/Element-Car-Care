
    // Seleccionamos los elementos usando los nombres exactos de tu HTML
    const modal = document.getElementById('custom-modal');
    const modalImg = document.getElementById('modal-image'); // Ajustado a tu id real
    const closeBtn = document.querySelector('.modal-close');
    const imagenes = document.querySelectorAll('.galeria-img');

    // Escuchamos el clic en cada miniatura de auto
    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex'; // Muestra el fondo oscuro
            modalImg.src = this.src;     // Carga la foto que tocaste
        });
    });

    // Función limpia para cerrar la vista completa
    function cerrarModal() {
        modal.style.display = 'none';
        modalImg.src = ''; 
    }

    // Eventos para cerrar (al tocar la X o el fondo)
    closeBtn.addEventListener('click', cerrarModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });
