document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const introCard = document.querySelector('.intro-card');
    const recadoButton = document.querySelector('.recado-button');
    const balloonGame = document.querySelector('.balloon-game');
    const balloonCounterCard = document.querySelector('.balloon-counter-card');
    const balloonCounterNumber = document.querySelector('.balloon-counter-number');
    const balloonContainer = document.getElementById('balloon-container');
    const celebration = document.querySelector('.celebration');
    const ageElement = document.querySelector('.age');
    const hearts = document.querySelector('.hearts');
    const message = document.querySelector('.message');
    const mainCard = document.querySelector('.card');
    const giftCard = document.querySelector('.gift-card');

    const years = 1;

    const retrospective = document.querySelector('.retrospective');
    const retrospectiveCard = document.querySelector('.retrospective-card');
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

    // Transição para a tela de retrospectiva ao clicar em "Não clique aqui! 😉"
doNotClickButton.addEventListener('click', () => {
    mainCard.classList.add('hidden'); // Oculta a tela final (card)
    retrospective.classList.remove('hidden'); // Mostra a tela de retrospectiva
    displayRetrospectiveSlide(0); // Mostra o primeiro slide da retrospectiva
    
});

// Função para exibir um slide específico da retrospectiva
let currentIndex = 0;
function displayRetrospectiveSlide(index) {
    const { title, image, icon } = retrospectiveData[index];
    retroTitle.textContent = title;
    retroImage.src = image;
    retroIcon.textContent = icon;
    createHearts(4);
}

// Botão "Próxima memória" na retrospectiva
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1); // Avança para o próximo slide
    if (currentIndex>= retrospectiveData.length){ retrospective.classList.add('hidden'); // Esconde a retrospectiva
    giftCard.classList.remove('hidden'); // Exibe o card de presente
    createHearts(100);
} else{
    displayRetrospectiveSlide(currentIndex); // Exibe o slide atualizado
    createHearts(4);
}

});
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

    function openCard() {
        card.classList.add('open');
        doNotClickButton.style.display = 'block';
    }
    doNotClickButton.addEventListener('click', showRetrospective);

    let balloonsPopped = 0;
    let balloonExists = false; // Controle para garantir que apenas um balão seja exibido por vez

    
    function createHearts(time) {
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
            }, time*1000);
        }
    }
    

    function openCard() {
        card.classList.add('open');
        createHearts(4);
    }card.addEventListener('click', openCard);

    // Exibe o botão "Como assim um recado?" após 3 segundos
    setTimeout(() => {
        recadoButton.classList.remove('hidden');
    }, 3000);

    // Transição para o jogo dos balões
    recadoButton.addEventListener('click', () => {
        createHearts(4);
        introCard.style.display = 'none';
        balloonGame.classList.remove('hidden');
    });

    // Função para gerar cor aleatória
    function getRandomColor() {
        const colors = ['#FF6347', '#FFD700', '#32CD32', '#1E90FF', '#FF69B4', '#800080'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Função para criar balões
    function createBalloon() {
        if (balloonsPopped >= years || balloonExists) return; // Evita criar novos balões após o limite

        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = getRandomColor(); // Cor aleatória
        balloon.style.left = `${Math.random() * 80 }%`; // Posição aleatória horizontal

        // Evento de clique no balão
        balloon.addEventListener('click', () => {
            balloon.classList.add('pop-animation'); // Adiciona animação de estouro
            balloon.addEventListener('animationend', () => {
                balloon.remove();
                createHearts(4);
                balloonExists = false; // Remove o balão da tela após a animação
            });

            balloonsPopped++;

            // Exibe o contador ao estourar o primeiro balão
            if (balloonsPopped === 1) {
                balloonCounterCard.classList.remove('hidden');
            }

            // Atualiza o número do contador
            balloonCounterNumber.textContent = balloonsPopped;

            // Finaliza o jogo ao atingir 22 balões
            if (balloonsPopped >= years) {
                setTimeout(() => {
                    balloonGame.classList.add('hidden');
                    celebration.classList.remove('hidden');
                    ageElement.textContent = `${balloonsPopped} anos cheios de histórias! 🥰`;
                    createHearts(30);

                    // Exibe o presente após alguns segundos
                    setTimeout(() => {
                        message.classList.remove('hidden');
                    }, 3000);
                }, 500); // Pequeno atraso antes de transitar para a celebração
            } else {
                // Cria o próximo balão com atraso
                setTimeout(createBalloon, 100);
            }
        });

        balloonContainer.appendChild(balloon);
    }

    // Cria o primeiro balão
    createBalloon();

    message.addEventListener('click', () => {
        celebration.classList.add('hidden'); // Esconde a tela de celebração
        mainCard.classList.remove('hidden'); // Mostra a tela final
        doNotClickButton.classList.remove('hidden'); // Exibe o botão "Não clique aqui!"
    });
    

    doNotClickButton.addEventListener('click', () => {
        mainCard.classList.add('hidden'); // Esconde a tela final
        retrospective.classList.remove('hidden'); // Exibe a tela de retrospectiva
        displayRetrospectiveSlide(0); // Inicia a retrospectiva no primeiro slide
    });
    
});
