document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
    const retrospective = document.querySelector('.retrospective');
    const retrospectiveCard = document.querySelector('.retrospective-card');
    const hearts = document.querySelector('.hearts');

    const retroTitle = document.querySelector('.retro-title');
    const retroImage = document.querySelector('.retro-image');
    const retroIcon = document.querySelector('.retro-icon');
    const nextButton = document.querySelector('.next');
    const doNotClickButton = document.querySelector('.do-not-click');

    const retrospectiveData = [
        { title: "First Memory", image: "https://via.placeholder.com/800", icon: "🎉" },
        { title: "A Special Day", image: "https://via.placeholder.com/800", icon: "🌟" },
        { title: "Unforgettable Moment", image: "https://via.placeholder.com/800", icon: "🎁" },
    ];

    function openCard() {
        card.classList.add('open');
        createHearts();
    }


    let currentIndex = 0;



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
    
            // Atualize a opacidade após uma pequena pausa
            setTimeout(() => {
                heart.style.opacity = '1';
            }, 100);
    
            // Remova após 4 segundos
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }
    

    card.addEventListener('click', openCard);
    container.addEventListener('touchstart', openCard, { once: true });


    function openCard() {
        card.classList.add('open');
        doNotClickButton.style.display = 'block';
    }

    function showRetrospective() {
        container.style.display = 'none';
        retrospective.classList.remove('hidden');
        displayRetrospectiveSlide(currentIndex);
    }

    function displayRetrospectiveSlide(index) {
        const { title, image, icon } = retrospectiveData[index];
        retroTitle.textContent = title;
        retroImage.src = image;
        retroIcon.textContent = icon;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % retrospectiveData.length;
        displayRetrospectiveSlide(currentIndex);
    }

    card.addEventListener('click', openCard);
    doNotClickButton.addEventListener('click', showRetrospective);
    nextButton.addEventListener('click', nextSlide);
});




document.addEventListener("DOMContentLoaded", () => {
    const introCard = document.querySelector('.intro-card');
    const recadoButton = document.querySelector('.recado-button');
    const balloonGame = document.querySelector('.balloon-game');
    const balloonCounter = document.querySelector('.balloon-counter');
    const balloon = document.querySelector('.balloon');
    const celebration = document.querySelector('.celebration');
    const celebrationMessage = document.querySelector('.celebration-message');
    const ageElement = document.querySelector('.age');
    const gift = document.querySelector('.gift');
    const mainCard = document.querySelector('.card');

    let balloonsPopped = 0;

    // Exibe o botão "Como assim um recado?" após 3 segundos
    setTimeout(() => {
        recadoButton.classList.remove('hidden');
    }, 3000);

    // Transição para o jogo dos balões
    recadoButton.addEventListener('click', () => {
        introCard.style.display = 'none';
        balloonGame.classList.remove('hidden');
    });

    // Estourar balões
    balloon.addEventListener('click', () => {
        balloonsPopped++;
        if (balloonsPopped < 22) {
            balloonCounter.textContent = `Balloons popped: ${balloonsPopped}`;
            // Muda a cor e posição do balão
            balloon.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            balloon.style.left = `${Math.random() * 80 + 10}%`;
        } else {
            // Finaliza o jogo dos balões
            balloonGame.classList.add('hidden');
            celebration.classList.remove('hidden');
            ageElement.textContent = `${balloonsPopped} years`;

            // Exibe o presente após alguns segundos
            setTimeout(() => {
                gift.classList.remove('hidden');
            }, 3000);
        }
    });

    // Transição para a tela final
    gift.addEventListener('click', () => {
        celebration.classList.add('hidden');
        mainCard.classList.remove('hidden');
    });
});

