const main = document.createElement('main');
main.classList.add('game');
document.body.append(main);

const title = document.createElement('h1');
title.classList.add('game__title');
title.textContent = 'Memory Game';
main.append(title);

const board = document.createElement('div');
board.classList.add('game__board');
main.append(board);

const card = document.createElement('div');
card.classList.add('card');

const cardInner = document.createElement('div');
cardInner.classList.add('card__inner');

const cardFront = document.createElement('div');
cardFront.classList.add('card__face', 'card__face--front');
const frontImg = document.createElement('img');
frontImg.src = 'assets/images/cat1.jpg';
frontImg.alt = 'cat';
cardFront.append(frontImg);

const cardBack = document.createElement('div');
cardBack.classList.add('card__face', 'card__face--back');
const backImg = document.createElement('img');
backImg.src = 'assets/images/back.jpg';
backImg.alt = 'cat-back';
cardBack.append(backImg);

cardInner.append(cardFront, cardBack);
card.append(cardInner);

board.append(card);
