function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex"; // Muestra el modal
    setTimeout(() => {
        modal.classList.add("show"); // Agrega la animación de zoom
    }, 10);

    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none"; // Oculta completamente el modal
    }, 300); // Espera la animación antes de ocultar
}
