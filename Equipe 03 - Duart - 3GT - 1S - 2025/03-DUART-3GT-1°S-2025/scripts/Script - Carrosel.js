document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const products = document.querySelectorAll('.carousel .product');
    let currentIndex = 0;
    let visibleCount = 4;

    function updateVisibleCount() {
        if(window.innerWidth <= 600) visibleCount = 1;
        else if(window.innerWidth <= 900) visibleCount = 2;
        else visibleCount = 4;
    }
    function updateCarousel() {
        const productWidth = products[0].offsetWidth + 24; // 24px gap
        track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= products.length - visibleCount;
    }
    prevBtn.addEventListener('click', () => {
        if(currentIndex > 0) currentIndex--;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        if(currentIndex < products.length - visibleCount) currentIndex++;
        updateCarousel();
    });
    window.addEventListener('resize', () => {
        updateVisibleCount();
        if(currentIndex > products.length - visibleCount) currentIndex = products.length - visibleCount;
        if(currentIndex < 0) currentIndex = 0;
        updateCarousel();
    });
    updateVisibleCount();
    updateCarousel();

    // Script do menu hamburguer
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            navbar.classList.toggle("show-menu");
        });
    }
});