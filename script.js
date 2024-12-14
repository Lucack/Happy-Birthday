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
    const gift = document.querySelector('.gift');
    const mainCard = document.querySelector('.card');
    const retrospective = document.querySelector('.retrospective');
    const doNotClickButton = document.querySelector('.do-not-click');
    const years = 22;

    let balloonsPopped = 0;
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
    

    function openCard() {
        card.classList.add('open');
        createHearts();
    }card.addEventListener('click', openCard);

    // Exibe o botão "Como assim um recado?" após 3 segundos
    setTimeout(() => {
        recadoButton.classList.remove('hidden');
    }, 3000);

    // Transição para o jogo dos balões
    recadoButton.addEventListener('click', () => {
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
        if (balloonsPopped >= years) return; // Evita criar novos balões após o limite

        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = getRandomColor(); // Cor aleatória
        balloon.style.left = `${Math.random() * 80 + 10}%`; // Posição aleatória horizontal

        // Evento de clique no balão
        balloon.addEventListener('click', () => {
            balloon.classList.add('pop-animation'); // Adiciona animação de estouro
            balloon.addEventListener('animationend', () => {
                balloon.remove(); // Remove o balão da tela após a animação
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
                    ageElement.textContent = `${balloonsPopped} years`;

                    // Exibe o presente após alguns segundos
                    setTimeout(() => {
                        gift.classList.remove('hidden');
                    }, 3000);
                }, 500); // Pequeno atraso antes de transitar para a celebração
            } else {
                // Cria o próximo balão com atraso
                setTimeout(createBalloon, 200);
            }
        });

        balloonContainer.appendChild(balloon);
    }

    // Cria o primeiro balão
    createBalloon();

    // Transição para a tela final ao clicar no presente
    gift.addEventListener('click', () => {
        celebration.classList.add('hidden');
        mainCard.classList.remove('hidden');
    });

    // Transição para a tela de retrospectiva ao clicar em "Don't Click Here"
    doNotClickButton.addEventListener('click', () => {
        mainCard.classList.add('hidden');
        retrospective.classList.remove('hidden');
    });
});
