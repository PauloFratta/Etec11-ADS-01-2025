document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth; // Obtendo a largura do item dinamicamente
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

});
