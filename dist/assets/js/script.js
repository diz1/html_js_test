'use strict';
const $ = (sel) => {
    document.querySelector(sel);
};

const cardTablePrices = document.querySelectorAll('.table-cards__price'),
    tableTrigger = document.querySelector('#table'),
    cardsTrigger = document.querySelector('#cards'),
    table = document.querySelector('.main-table');

const cardBlockButtons = document.querySelectorAll('.block-cards__button'),
    cardBlockPrices = document.querySelectorAll('.block-cards__price');

cardBlockButtons.forEach(item => {
    if (item.textContent === '') {
        item.parentNode.removeChild(item);
    }
});

cardBlockPrices.forEach(item => {
    if (item.textContent === '' || item.textContent === 'Цена не указана') {
        item.parentNode.removeChild(item);
    }
});

cardsTrigger.addEventListener('click', e => {
    const cards = document.querySelectorAll('.change_me');

    table.style.display = 'none';

    cards.forEach(item => {
        item.classList.replace('table-cards',               'block-cards');
        item.classList.replace('table-cards__inner',        'block-cards__inner');
        item.classList.replace('table-cards__item',         'block-cards__item');
        item.classList.replace('table-cards__header',       'block-cards__header');
        item.classList.replace('table-cards__id',           'block-cards__id');
        item.classList.replace('table-cards__image',        'block-cards__image');
        item.classList.replace('table-cards__title',        'block-cards__title');
        item.classList.replace('table-cards__description',  'block-cards__description');
        item.classList.replace('table-cards__prices',       'block-cards__prices');
        item.classList.replace('table-cards__price',        'block-cards__price');
        item.classList.replace('table-cards__button',       'block-cards__button');
    });
});

tableTrigger.addEventListener('click', e => {
    const cards = document.querySelectorAll('.change_me');
    
    table.style.display = 'table';
    
    cards.forEach(item => {
        item.classList.replace('block-cards',               'table-cards');
        item.classList.replace('block-cards__inner',        'table-cards__inner');
        item.classList.replace('block-cards__item',         'table-cards__item');
        item.classList.replace('block-cards__header',       'table-cards__header');
        item.classList.replace('block-cards__id',           'table-cards__id');
        item.classList.replace('block-cards__image',        'table-cards__image');
        item.classList.replace('block-cards__title',        'table-cards__title');
        item.classList.replace('block-cards__description',  'table-cards__description');
        item.classList.replace('block-cards__prices',       'table-cards__prices');
        item.classList.replace('block-cards__price',        'table-cards__price');
        item.classList.replace('block-cards__button',       'table-cards__button');
    });
});



// tableTrigger.addEventListener('click', e => {
//     const tableCards = $('.table-cards'),
//         tableCardsInner = $('.table-cards__inner'),
//         tableCardsItem = $('.table-cards__item'),
//         tableCardsHeader = $('.table-cards__header'),
//         tableCardsId = $('.table-cards__id'),
//         tableCardsImage = $('.table-cards__image'),
//         tableCardsTitle = $('.table-cards__title'),
//         tableCardsDescription = $('.table-cards__description'),
//         tableCardsPrices = $('.table-cards__prices'),
//         tableCardsPrice = $('.table-cards__price'),
//         tableCardsButton = $('.table-cards__button');

//     if (tableCards.className === 'table-cards') {
//         tableCards.classList.remove('table-cards');
//         tableCardsInner.classList.remove('table-cards__inner');
//         tableCardsItem.classList.remove('table-cards__item');
//         tableCardsHeader.classList.remove('table-cards__header');
//         tableCardsId.classList.remove('table-cards__id');
//         tableCardsImage.classList.remove('table-cards__image');
//         tableCardsTitle.classList.remove('table-cards__title');
//         tableCardsDescription.classList.remove('table-cards__description');
//         tableCardsPrices.classList.remove('table-cards__prices');
//         tableCardsPrice.classList.remove('table-cards__price');
//         tableCardsButton.classList.remove('table-cards__button');
        
//     }
// })