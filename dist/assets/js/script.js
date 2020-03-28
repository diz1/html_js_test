'use strict'; // Строгий режим

// Сокращение для "document.querySelector"

const $ = (sel) => {
    return document.querySelector(sel);
};


// Получаем элементы

const cardTablePrices = document.querySelectorAll('.table-cards__price'),
    tableTrigger = $('#table'),
    cardsTrigger = $('#cards'),
    table = $('.main-table'),
    cardBlockButtons = document.querySelectorAll('.block-cards__button'),
    cardBlockPrices = document.querySelectorAll('.block-cards__price');

    const cards = document.querySelectorAll('.change_me');

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


// Обработчики событий

cardsTrigger.addEventListener('click', e => {

    table.style.display = 'none';


    // Заменяем классы

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
    
    table.style.display = 'table';
    

    // Заменяем классы

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