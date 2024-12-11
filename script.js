document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
    const hearts = document.querySelector('.hearts');

    function openCard() {
        card.classList.add('open');
        createHearts();
    }

    function createHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            hearts.appendChild(heart);

            setTimeout(() => {
                heart.style.opacity = '1';
            }, 100);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }

    card.addEventListener('click', openCard);
    container.addEventListener('touchstart', openCard, { once: true });
});

