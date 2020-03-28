'use strict'; // Строгий режим

// Сокращение для "document.querySelector"

const $ = (sel) => {
    return document.querySelector(sel);
};


// Получаем элементы

const cardBlockButtons = document.querySelectorAll('.block-cards__button'),
    cardBlockPrices = document.querySelectorAll('.block-cards__price'),
    cards = document.querySelectorAll('.change_me'),
    cardTablePrices = document.querySelectorAll('.table-cards__price'),
    cardsDescr = document.querySelectorAll('.table-cards__description'),
    tableTrigger = $('#table'),
    cardsTrigger = $('#cards'),
    table = $('.main-table'),
    container = $('.container'),
    tableRow = $('.table_row'),
    tableCells = document.querySelectorAll('.table_cell'),
    blockTitles = document.querySelectorAll('.block-cards__title');

let state = {
    isCards: true,
    isTable: false
};

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
    state.isTable = false;
    state.isCards = true;
    tableCells.forEach(item => {
        item.style.borderBottom = 'none';
        item.style.display = 'flex';
        item.style.padding = '0';
        item.style.width = 'auto';
    });


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
    state.isTable = true;
    state.isCards = false;
    
    tableCells.forEach(item => {
        item.style.borderBottom = '1px solid black';
        item.style.paddingTop = '5px';
        item.style.display = 'table-cell';
    });

    if (window.outerWidth <= 493 || window.innerWidth <= 493) {
        container.classList.remove('align-center');
        
        tableCells.forEach(item => {
            item.style.width = `${tableRow.offsetWidth / 4}px`;
            if (window.outerWidth <= 390 || window.innerWidth <= 390 && state.isTable) {

                if (item.localName === 'h3') {
                    const shortText = item.textContent.slice(0, 20);
                    item.textContent = `${shortText}...`;
                }

                if (item.localName === 'p') {
                    item.style.display = 'none';
                }
                tableRow.children[2].style.display = 'none';
                item.style.width = `${tableRow.offsetWidth / 3}px`;
            } else if (window.outerWidth <= 390 || window.innerWidth <=390 && state.isCards) {
                if (item.localName === 'p') {
                    item.style.display = 'block';
                }
            }
        });
    } else {
        tableCells.forEach(item => {
            item.style.width = `300px`;
        });
    }

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


// Если открыли с устройства с шириной экрана меньше или равной 768px убираем выравнивание по умолчанию
if (window.outerWidth <= 768 || window.innerWidth <= 768) {
    container.classList.remove('align-center');
} else {
    container.classList.add('align-center');
}

// Убираем выравнивание по центру для экранов с шириной не выше 768px
window.addEventListener('resize', e => {
    
    if (window.outerWidth <= 768 || window.innerWidth <= 768) {
        container.classList.remove('align-center');
    } else {
        container.classList.add('align-center');
    }

    tableCells.forEach(item => {
        if (state.isTable) {
            item.style.display = 'table-cell';
        }
    });
    

    if (state.isTable) {
        if (window.outerWidth <= 493 || window.innerWidth <= 493) {
            container.classList.remove('align-center');
            
            tableCells.forEach(item => {
                item.style.width = `${tableRow.offsetWidth / 4}px`;
                if (window.outerWidth <= 390 || window.innerWidth <= 390 && state.isTable) {
                    if (item.localName === 'h3') {
                        const shortText = item.textContent.slice(0, 20);
                        item.textContent = `${shortText}...`;
                    }

                    if (item.localName === 'p') {
                        item.style.display = 'none';
                    }
                    tableRow.children[2].style.display = 'none';
                    item.style.width = `${tableRow.offsetWidth / 3}px`;
                } else if (window.outerWidth <= 390 || window.innerWidth <=390 && state.isCards) {
                    if (item.localName === 'p') {
                        item.style.display = 'block';
                    }
                }
            });
        } else {
            tableCells.forEach(item => {
                item.style.width = `300px`;
            });
        }
    }
});

// Отправка input

window.addEventListener('click', e => {
    const target = e.target,
        input = document.createElement('input'),
        data = {
            text: ''
        };

    if (target.classList.contains('block-cards__title')) {
        target.before(input);
        target.style.display = 'none';
        input.style.border = 'none';
        input.value = target.textContent;
        input.style.fontWeight = '700';
        input.style.fontSize = '16px';
        input.style.color = '#00B7FF';
        input.autofocus = true;

        input.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                let xhr = new XMLHttpRequest();
                const reqReadyStateChange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        document.getElementById("output").innerHTML=xhr.responseText;
                    }
                };
                const body = `text=${data.text}`;

                xhr.open("POST", "http://localhost:3000/assets/test.txt");
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onreadystatechange = reqReadyStateChange;
                xhr.send(body);
                target.textContent = input.value;
                target.style.display = 'block';
                input.parentNode.removeChild(input);
                
                return false;
            }
        });

    }
    
});
 
