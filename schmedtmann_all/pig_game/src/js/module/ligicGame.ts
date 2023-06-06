

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

  let activePlayer = '0';
  const totalCurrentScore: number[] = [0, 0];

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
  }

  startGame();

  const holdGame = (player: string, rndNum: number) => {
    const currentPlayer = document.querySelector(`#current--${player}`);
    if(currentPlayer && currentPlayer !== null){
      if(rndNum === 1){
        currentPlayer.textContent = '0';
        pOneSection?.classList.toggle('player--active');
        pTwoSection?.classList.toggle('player--active');
        activePlayer = '1';
        return;
      }
      currentPlayer.textContent = '' + rndNum;
    }
    
    btnHold.addEventListener('click', () => {
      pOneSection?.classList.toggle('player--active');
      pTwoSection?.classList.toggle('player--active');
    });
  }







}