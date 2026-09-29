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

const cards = [...cardsImg, ...cardsImg];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

const main = document.createElement('main');
main.classList.add('game');
document.body.append(main);

const title = document.createElement('h1');
title.classList.add('game__title');
title.textContent = 'Memory Game';
main.append(title);

const stats = document.createElement('div');
stats.classList.add('game__stats');
main.append(stats);

const movesCounter = document.createElement('p');
movesCounter.textContent = `Moves: ${moves}`;
stats.append(movesCounter);

const matched = document.createElement('p');
matched.textContent = `Matched: ${matchedPairs}`;
stats.append(matched);

const winModal = document.createElement('p');
winModal.classList.add('game__win');
winModal.textContent = '';
main.append(winModal);

const restartButton = document.createElement('button');
restartButton.classList.add('game__restart');
restartButton.textContent = 'Restart Game';
main.append(restartButton);
restartButton.addEventListener('click', () => {
  location.reload();
});

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
        winModal.textContent = `You win in ${moves} moves!`;
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

const shuffled = shuffleCards(cards);

shuffled.forEach((cardName) => {
  const card = createCard(cardName);
  board.append(card);
});

function resetCards() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
