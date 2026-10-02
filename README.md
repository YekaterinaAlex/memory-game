# memory-game

A classic card-matching game built with JavaScript, SCSS, and HTML.
The goal of the game is to find all matching pairs using as few moves as possible.
Features

- 16 cards / 8 matching pairs
- Random card shuffle at the start of every game
- Card flip animation
- Matching cards remain open
- Non-matching cards flip back after a short delay
- Move counter
- Matched pairs counter
- Win modal with the final number of moves
- New Game functionality without reloading the page
- Leaderboard modal
- Top 10 results stored in localStorage
- Duplicate results are not stored
- Results remain available after reopening the application
- Responsive layout for desktop and mobile devices

How to Play

1. Open the game.
2. Click a card to reveal its image.
3. Click a second card.
4. If the cards match, they remain open.
5. If the cards do not match, they flip back after a short delay.
6. Continue until all 8 pairs are found.
7. After the final pair is found, the win modal displays the total number of moves.
8. The completed result is saved to the leaderboard.
   One move is counted after two cards are opened.

Game Rules

- Only two cards can be selected at a time.
- Clicking the same open card again is ignored.
- Clicking an already matched card is ignored.
- While a non-matching pair is waiting to flip back, other cards cannot be selected.
- Matching pairs stay open until the end of the game.

Leaderboard
Completed game results are saved in localStorage.
The leaderboard:

- stores up to 10 best results;
- sorts results from the lowest number of moves to the highest;
- does not store duplicate results;
- keeps results after page reload or reopening the application;
- displays a message when there are no saved results.

New Game
A new game can be started from the header or from the win modal.
Starting a new game:

- resets the move counter;
- resets the matched pairs counter;
- closes the win modal;
- reshuffles all cards;
- creates a new board;
- cancels a pending non-matching-pair timer;
- does not reload the page.

Local Installation

1. Clone the repository
   git clone https://github.com/YekaterinaAlex/memory-game.git
2. Open the project folder
   cd memory-game
3. Switch to the memory-game branch
   git checkout memory-game
4. Install dependencies
   npm install
5. Start Sass in watch mode
   npm run sass
6. Run the application
   Open index.html in your browser.
   You can also use a local development server, for example VS Code Live Server.
   Development
   The source SCSS files are located in:
   scss/
   The main SCSS entry file is:
   scss/style.scss
   Sass compiles the styles into:
   css/style.css
   To watch SCSS files and automatically compile changes, run:
   npm run sass
   Deployment

https://yekaterinaalex.github.io/memory-game/

Repository
GitHub repository:
https://github.com/YekaterinaAlex/memory-game

Author
YekaterinaAlex
GitHub: https://github.com/YekaterinaAlex
