document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    let items = Array.from(track.children);

    function renderItems() {
        track.innerHTML = '';
        items.forEach(item => track.appendChild(item));
    }

    function rotateNext() {
        const first = items.shift(); 
        items.push(first);          
        renderItems();
    }

    function rotatePrev() {
        const last = items.pop();   
        items.unshift(last);  
        renderItems();
    }

    document.querySelector('.button.right').addEventListener('click', rotateNext);
    document.querySelector('.button.left').addEventListener('click', rotatePrev);

    setInterval(rotateNext, 10000);
});
