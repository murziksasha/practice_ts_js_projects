

export function functionPractice() {
  const btn = document.querySelector('[data-btn]') as HTMLButtonElement;
  const poll = {
    question: `What is your favourite programming language?`,
    options: ['0: javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

      this.displayResults();
      this.displayResults('string');
    },
    displayResults(type = 'array') {
      if(type === 'array') {
        console.log((this.answers));
      } else if (type === 'string'){
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
    }
  }

  btn.addEventListener('click', () => {
    poll.registerNewAnswer();
    console.log(poll.answers)
  });

  poll.displayResults.apply({answers: [1, 5]}, ['string']);

  (function () {
    const header = document.querySelector('h1') as HTMLHeadElement;
    header.style.color = 'red';
  
    document.body.addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();





}