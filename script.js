const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function showSlide(i) {
    const slideWidth = images.clientWidth; // Usamos el ancho completo del contenedor
    images.style.transform = `translateX(-${i * slideWidth}px)`; // Usamos backticks
}

prevBtn.addEventListener('click', () => {
    index = (index === 0) ? images.children.length - 1 : index - 1;
    showSlide(index);
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.children.length;
    showSlide(index);
});
setInterval(() => {
    index = (index + 1) % images.children.length;
    showSlide(index);
}, 5000); // cada 5 segundos
window.addEventListener('resize', () => showSlide(index)); // Recalcular en redimensionamiento