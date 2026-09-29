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

function createCard(cardName) {
  const card = document.createElement('div');
  card.classList.add('card');

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
    card.classList.toggle('card--flipped');
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
