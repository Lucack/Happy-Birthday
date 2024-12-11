document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
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

    let currentIndex = 0;

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
