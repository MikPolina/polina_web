const scroll = document.getElementById('scroll');

let isDown = false;
let startX;
let scrollLeft;

scroll.addEventListener('mousedown', (e) => {
    isDown = true;
    scroll.classList.add('active');
    startX = e.pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
});

scroll.addEventListener('mouseleave', () => {
    isDown = false;
    scroll.classList.remove('active');
});

scroll.addEventListener('mouseup', () => {
    isDown = false;
    scroll.classList.remove('active');
});

scroll.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Если не нажата кнопка мыши
    e.preventDefault();
    const x = e.pageX - scroll.offsetLeft;
    const walk = (x - startX) * 2; // Увеличиваем скорость прокрутки
    scroll.scrollLeft = scrollLeft - walk;
});
