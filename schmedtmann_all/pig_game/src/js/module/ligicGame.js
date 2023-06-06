export function logicGame() {
    const pOneSection = document.querySelector('.player--0');
    const pTwoSection = document.querySelector('.player--1');
    const playerOneScore = document.querySelector('#score--0');
    const playerTwoScore = document.querySelector('#score--1');
    const curPlayerOneScore = document.querySelector('#current--0');
    const curPlayerTwoScore = document.querySelector('#current--1');
    const dice = document.querySelector('img.dice');
    const btnNewGame = document.querySelector('button.btn--new');
    const btnRollDice = document.querySelector('button.btn--roll');
    const btnHold = document.querySelector('button.btn--hold');
    let activePlayer = '0';
    const totalCurrentScore = [0, 0];
    const initGame = () => {
        playerOneScore.textContent = '0';
        playerTwoScore.textContent = '0';
        dice.classList.add('hide');
    };
    initGame();
    const startGame = () => {
        let currentNum = 0;
        btnRollDice.addEventListener('click', () => {
            dice.classList.remove('hide');
            dice.src = `./src/img/dice-6.png`;
            let rndNumber = Math.floor((Math.random() * 6) + 1);
            dice.src = `./src/img/dice-${rndNumber}.png`;
            holdGame(activePlayer, rndNumber);
        });
    };
    startGame();
    const holdGame = (player, rndNum) => {
        const currentPlayer = document.querySelector(`#current--${player}`);
        if (currentPlayer && currentPlayer !== null) {
            if (rndNum === 1) {
                currentPlayer.textContent = '0';
                pOneSection === null || pOneSection === void 0 ? void 0 : pOneSection.classList.toggle('player--active');
                pTwoSection === null || pTwoSection === void 0 ? void 0 : pTwoSection.classList.toggle('player--active');
                activePlayer = '1';
                return;
            }
            currentPlayer.textContent = '' + rndNum;
        }
        btnHold.addEventListener('click', () => {
            pOneSection === null || pOneSection === void 0 ? void 0 : pOneSection.classList.toggle('player--active');
            pTwoSection === null || pTwoSection === void 0 ? void 0 : pTwoSection.classList.toggle('player--active');
        });
    };
}
//# sourceMappingURL=ligicGame.js.map