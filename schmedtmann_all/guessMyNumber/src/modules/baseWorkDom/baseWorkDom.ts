
export function baseWorkDom() {
  const message = document.querySelector('.message') as HTMLParagraphElement;
  const check = document.querySelector('.check') as HTMLButtonElement;
  const guess = document.querySelector('.guess') as HTMLInputElement;
  const myGuess = +guess?.value;

  check.addEventListener('click', () => {
    if(!myGuess) {
      message.textContent = '🚫No Number🚫';
    }
  });
}