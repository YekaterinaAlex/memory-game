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
