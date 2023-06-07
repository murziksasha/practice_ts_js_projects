

export function logicGame() {
  
  const pOneSection = document.querySelector('.player--0');
  const pTwoSection = document.querySelector('.player--1');
  const playerOneScore = document.querySelector('#score--0') as HTMLParagraphElement;
  const playerTwoScore = document.querySelector('#score--1') as HTMLParagraphElement;
  const curPlayerOneScore = document.querySelector('#current--0') as HTMLParagraphElement;
  const curPlayerTwoScore = document.querySelector('#current--1') as HTMLParagraphElement;
  const dice = document.querySelector('img.dice') as HTMLImageElement;
  const btnNewGame = document.querySelector('button.btn--new') as HTMLButtonElement;
  const btnRollDice = document.querySelector('button.btn--roll') as HTMLButtonElement;
  const btnHold = document.querySelector('button.btn--hold') as HTMLButtonElement;

  let activePlayer = 0;
  let currentScore = 0;
  const totalCurrentScore: number[] = [0, 0];

  const initGame = () => {
    activePlayer = 0;
    currentScore = 0;
    btnRollDice.disabled = false;
    btnHold.disabled = false;
    playerOneScore.textContent = '0';
    playerTwoScore.textContent = '0';
    curPlayerOneScore.textContent = '0';
    curPlayerTwoScore.textContent = '0';
    pOneSection?.classList.add('player--active');
    pOneSection?.classList.remove('player--winner');
    pTwoSection?.classList.remove('player--active', 'player--winner');
    totalCurrentScore[0] = 0;
    totalCurrentScore[1] = 0;
    dice.classList.add('hide');
  };

  initGame();

  const changePlayerCondition = () => {
        curPlayerOneScore.textContent = '0';
        curPlayerTwoScore.textContent = '0';
        pOneSection?.classList.toggle('player--active');
        pTwoSection?.classList.toggle('player--active');
  }

  

  const startGame = () => {

    btnRollDice.addEventListener('click', () => {
      dice.classList.remove('hide');
      let rndNumber = Math.floor((Math.random() * 6) + 1);
      dice.src = `./src/img/dice-${rndNumber}.png`;
      if(rndNumber !== 1){
        currentScore += rndNumber;
        holdGame(rndNumber, currentScore);
      } else {
        currentScore = 0;
        changePlayerCondition();
        activePlayer = activePlayer === 0 ? 1 : 0;
        holdGame(rndNumber, currentScore);
      }
    });
    btnHold.addEventListener('click', () => {
      console.log('hold')
      totalCurrentScore[activePlayer] += currentScore;

      const currentPlayer = document.querySelector(`#score--${activePlayer}`) as HTMLSpanElement;
      const curPlayerSection = document.querySelector(`.player--${activePlayer}`);
      if(totalCurrentScore[activePlayer] < 10){
      currentPlayer.textContent = '' + totalCurrentScore[activePlayer];
      changePlayerCondition();
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      } else {
        dice.classList.add('hide');
        currentPlayer.textContent = 'WIN';
        curPlayerSection?.classList.remove('player--active');
        curPlayerSection?.classList.add('player--winner');
        activePlayer = activePlayer === 0 ? 1 : 0;
        const secondPlayer = document.querySelector(`#score--${activePlayer}`) as HTMLSpanElement;
        secondPlayer.textContent = 'LOSE';
        btnRollDice.disabled = true;
        btnHold.disabled = true;
      }
    });
      btnNewGame.addEventListener('click', initGame);
  }

  startGame();

  const holdGame = (rndNum: number, score: number) => {
    const currentPlayer = document.querySelector(`#current--${activePlayer}`) as HTMLSpanElement;
    if(currentPlayer && currentPlayer !== null){
      currentPlayer.textContent = '' + score;
    }
  }











}