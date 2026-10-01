const cardsImg = [
  'cat1',
  'cat2',
  'cat3',
  'cat4',
  'cat5',
  'cat6',
  'cat7',
  'cat8',
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.classList.add('header__title');
title.textContent = 'Memory Game';
header.append(title);

const headerActions = document.createElement('div');
headerActions.classList.add('header__actions');

const newGameButton = document.createElement('button');
newGameButton.classList.add('header__button');
newGameButton.textContent = 'New Game';
newGameButton.addEventListener('click', startGame);

const leaderboardButton = document.createElement('button');
leaderboardButton.classList.add('header__button');
leaderboardButton.textContent = 'Leaderboard';

headerActions.append(newGameButton, leaderboardButton);
header.append(headerActions);

document.body.append(header);

const main = document.createElement('main');
main.classList.add('game');
document.body.append(main);

const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');

const modalText = document.createElement('p');
modalText.classList.add('modal__text');

const modalNewGameButton = document.createElement('button');
modalNewGameButton.classList.add('modal__button');
modalNewGameButton.textContent = 'New Game';
modalNewGameButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  startGame();
});

const modalCloseButton = document.createElement('button');
modalCloseButton.classList.add('modal__button');
modalCloseButton.textContent = 'Close';
modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

modalContent.append(modalText, modalNewGameButton, modalCloseButton);

modal.append(modalContent);
document.body.append(modal);

const stats = document.createElement('div');
stats.classList.add('game__stats');
main.append(stats);

const movesCounter = document.createElement('p');
movesCounter.classList.add('game__moves');
movesCounter.textContent = `Moves: ${moves}`;
stats.append(movesCounter);

const matched = document.createElement('p');
matched.classList.add('game__matches');
matched.textContent = `Matched: ${matchedPairs}`;
stats.append(matched);

const winModal = document.createElement('p');
winModal.classList.add('game__win');
winModal.textContent = '';
main.append(winModal);

const board = document.createElement('div');
board.classList.add('game__board');
main.append(board);

function createCard(cardName) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = cardName;

  const cardInner = document.createElement('div');
  cardInner.classList.add('card__inner');

  const cardFront = document.createElement('div');
  cardFront.classList.add('card__face', 'card__face--front');
  const frontImg = document.createElement('img');
  frontImg.src = `assets/images/${cardName}.jpg`;
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

  card.addEventListener('click', () => {
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains('card--matched')) return;

    card.classList.add('card--flipped');

    if (!firstCard) {
      firstCard = card;
      return;
    }
    secondCard = card;
    moves++;
    movesCounter.textContent = `Moves: ${moves}`;

    if (firstCard.dataset.name === secondCard.dataset.name) {
      firstCard.classList.add('card--matched');
      secondCard.classList.add('card--matched');
      matchedPairs++;
      matched.textContent = `Matched: ${matchedPairs}`;

      if (matchedPairs === cardsImg.length) {
        modalText.textContent = `You win in ${moves} moves!`;
        modal.classList.add('modal--open');
      }

      resetCards();
    } else {
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove('card--flipped');
        secondCard.classList.remove('card--flipped');

        resetCards();
      }, 1000);
    }
  });

  return card;
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }
  return cards;
}

function startGame() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  moves = 0;
  matchedPairs = 0;

  modal.classList.remove('modal--open');

  movesCounter.textContent = `Moves: ${moves}`;
  matched.textContent = `Matches: ${matchedPairs}`;
  winModal.textContent = '';

  board.replaceChildren();

  const cards = [...cardsImg, ...cardsImg];
  const shuffledCards = shuffleCards(cards);

  shuffledCards.forEach((cardName) => {
    const card = createCard(cardName);
    board.append(card);
  });
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

startGame();
