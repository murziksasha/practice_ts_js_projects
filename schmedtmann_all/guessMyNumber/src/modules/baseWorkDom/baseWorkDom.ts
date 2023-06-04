
export function baseWorkDom() {
  const message = document.querySelector('.message') as HTMLParagraphElement;
  const guess = document.querySelector('.guess') as HTMLInputElement;
  const checkBtn = document.querySelector('.btn.check') as HTMLButtonElement;
  const againBnt = document.querySelector('.btn.again') as HTMLButtonElement;
  const divNumber = document.querySelector('.number') as HTMLDivElement;
  const spanScore = document.querySelector('.score') as HTMLSpanElement;
  const spanHighScore = document.querySelector('.highscore') as HTMLSpanElement;
  const labelParagrHighScores = document.querySelector('.label-highscore') as HTMLParagraphElement;

  let highScoreStorage: number = 0;
  let storedValue = localStorage.getItem('highscore');
  spanHighScore.textContent = storedValue;

  labelParagrHighScores.style.cssText = `
    cursor: pointer;
  `;
  
  labelParagrHighScores.addEventListener('mouseover', () => {
    labelParagrHighScores.style.cssText = `
      background-color: #fff;
      color: #000;
      cursor: pointer;
    `;
  });
  
  labelParagrHighScores.addEventListener('mouseout', () => {
    labelParagrHighScores.style.cssText = `
      cursor: pointer;
    `;
  });

  labelParagrHighScores.addEventListener('dblclick', ()=> {
    localStorage.setItem('highscore', '0');
    storedValue = localStorage.getItem('highscore');
    spanHighScore.textContent = storedValue;
  });


 

  if (highScoreStorage !== null && storedValue !== null) {
    highScoreStorage = +storedValue;
  }
  


  const secretNumber: number = Math.floor(Math.random() * 20) + 1;
  divNumber.style.visibility = 'hidden';
  divNumber.textContent = secretNumber + '';
  let score = 20;
  spanScore.textContent = score + '';

  againBnt.addEventListener('click', () => {
    location.reload();
    checkBtn.disabled = false;
  })

  const scoreCount = () => {
    score = score - 2;
    if(score < 1){
      score = 0;
      message.textContent = '💣 GAME OVER! Try Again...';
      divNumber.style.visibility = 'visible';
      checkBtn.disabled = true;
    }
    spanScore.textContent = score + '';
  }

  
  checkBtn.addEventListener('click', () => {
    let guessNumber: number = +guess.value;
    if(guessNumber < 1){
      guessNumber = 1;
      guess.value = '1';
    } else if (guessNumber > 20){
      guessNumber = 20;
      guess.value = '20';
    }
    if(!guess || guess.value === ''){
      message.textContent = '⛔ NO NUMBER';
    } else if ( guessNumber === secretNumber) {
      if(score > highScoreStorage){
        localStorage.setItem('highscore', ''+score);
      }
      message.textContent = '🍕 Correct Number!';
      divNumber.style.visibility = 'visible';
      checkBtn.disabled = true;
      document.body.style.backgroundColor = 'green';
    } else if (guessNumber > secretNumber){
      message.textContent = '📈 Too High !';
      scoreCount();
    } else if (guessNumber < secretNumber){
      message.textContent = '📉 Too Law !';
      scoreCount();
    }
  });

}