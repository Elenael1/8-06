const cards = document.querySelectorAll('.list-item');
const cardContainer = document.querySelector('.list-container');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    }, {
        threshold: 1,
    }
);

const lastElementObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    createNewCard();
    lastElementObserver.unobserve(lastCard.target);
    lastElementObserver.observe(document.querySelector('.list-item:last-child'));
});

lastElementObserver.observe(document.querySelector('.list-item:last-child'));

cards.forEach(card => {
    observer.observe(card);
});

function createNewCard() {
    for (let index = 0; index <= 10; index++) {
        const card = document.createElement('li');
        card.textContent = 'ADD SOMETHING';
        card.classList.add('list-item');
        observer.observe(card);
        cardContainer.append(card);
    }
}