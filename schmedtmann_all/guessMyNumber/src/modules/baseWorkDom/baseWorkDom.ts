
export function baseWorkDom() {
  const message = document.querySelector('.message') as HTMLParagraphElement;
  const guess = document.querySelector('.guess') as HTMLInputElement;
  const checkBtn = document.querySelector('.btn.check') as HTMLButtonElement;
  const againBnt = document.querySelector('.btn.again') as HTMLButtonElement;
  const divNumber = document.querySelector('.number') as HTMLDivElement;
  const spanScore = document.querySelector('.score') as HTMLSpanElement;


  const secretNumber: number = Math.floor(Math.random() * 20) + 1;
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
      message.textContent = '🍕 Correct Number!';
    } else if (guessNumber > secretNumber){
      message.textContent = '📈 Too High !';
      scoreCount();
    } else if (guessNumber < secretNumber){
      message.textContent = '📉 Too Law !';
      scoreCount();
    }
  });



}