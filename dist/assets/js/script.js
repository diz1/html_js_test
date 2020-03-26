const cardButtons = document.querySelectorAll('.block-cards__button');
const cardPrices = document.querySelectorAll('.block-cards__price');

cardButtons.forEach(item => {
    if (item.textContent === '') {
        item.parentNode.removeChild(item);
    }
});

cardPrices.forEach(item => {
    if (item.textContent === '') {
        item.parentNode.removeChild(item);
    }
});