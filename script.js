document.addEventListener('DOMContentLoaded', () => {
    // Elementos principais
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

    const introCard = document.querySelector('.intro-card');
    const recadoButton = document.querySelector('.recado-button');
    const balloonGame = document.querySelector('.balloon-game');
    const balloonCounter = document.querySelector('.balloon-counter');
    const balloonContainer = document.getElementById('balloon-container');
    const celebration = document.querySelector('.celebration');
    const ageElement = document.querySelector('.age');
    const gift = document.querySelector('.gift');

    const retrospectiveData = [
        { title: "First Memory", image: "https://via.placeholder.com/800", icon: "🎉" },
        { title: "A Special Day", image: "https://via.placeholder.com/800", icon: "🌟" },
        { title: "Unforgettable Moment", image: "https://via.placeholder.com/800", icon: "🎁" },
    ];

    let currentIndex = 0;
    let balloonsPopped = 0;

    // Função para abrir o cartão
    function openCard() {
        card.classList.add('open');
        createHearts();
    }

    // Função para criar corações animados
    function createHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 2}s`;

            hearts.appendChild(heart);

            setTimeout(() => heart.style.opacity = '1', 100);
            setTimeout(() => heart.remove(), 4000);
        }
    }

    // Função para exibir a retrospectiva
    function showRetrospective() {
        container.style.display = 'none';
        retrospective.classList.remove('hidden');
        displayRetrospectiveSlide(currentIndex);
    }
    

    // Função para exibir um slide da retrospectiva
    function displayRetrospectiveSlide(index) {
        const { title, image, icon } = retrospectiveData[index];
        retroTitle.textContent = title;
        retroImage.src = image;
        retroIcon.textContent = icon;
    }

    // Função para exibir o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % retrospectiveData.length;
        displayRetrospectiveSlide(currentIndex);
    }

    // Função para iniciar o jogo dos balões
    function startBalloonGame() {
        introCard.style.display = 'none';
        balloonGame.classList.remove('hidden');
    }

    

   
    // Listeners
    card.addEventListener('click', openCard);
    container.addEventListener('touchstart', openCard, { once: true });
    doNotClickButton.addEventListener('click', showRetrospective);
    nextButton.addEventListener('click', nextSlide);
    recadoButton.addEventListener('click', startBalloonGame);
    gift.addEventListener('click', () => {
        celebration.classList.add('hidden');
        card.classList.remove('hidden');
    });

    // Exibe o botão "Como assim um recado?" após 3 segundos
    setTimeout(() => recadoButton.classList.remove('hidden'), 3000);
});



let balloonsPopped = 0; // Contador de balões estourados
const balloonContainer = document.getElementById('balloon-container');
const balloonCounterCard = document.querySelector('.balloon-counter-card'); // Card do contador
const balloonCounterNumber = document.querySelector('.balloon-counter-number'); // Número do contador

// Função para gerar cor aleatória
function getRandomColor() {
    const colors = ['#FF6347', '#FFD700', '#32CD32', '#1E90FF', '#FF69B4', '#800080'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Função para criar um balão
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.backgroundColor = getRandomColor(); // Define cor aleatória

    // Adiciona evento de clique no balão
    balloon.addEventListener('click', function () {
        balloon.classList.add('pop-animation'); // Animação de estouro
        balloon.addEventListener('animationend', function () {
            balloon.remove(); // Remove o balão da tela
            balloonsPopped++;

            // Exibe o contador ao estourar o primeiro balão
            if (balloonsPopped === 1) {
                balloonCounterCard.classList.remove('hidden'); // Exibe o card do contador
            }

            // Atualiza o número do contador
            balloonCounterNumber.textContent = balloonsPopped;

            // Cria o próximo balão com atraso
            setTimeout(createBalloon, 200);
        });
    });

    balloonContainer.appendChild(balloon);
}

// Cria o primeiro balão com atraso
setTimeout(createBalloon, 200);
