export function functionPractice() {
    const btn = document.querySelector('[data-btn]');
    const poll = {
        answers: [],
        registerNewAnswer() {
            const answer = prompt(`What is your favourite language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      `, ``);
            return answer;
        }
    };
    btn.addEventListener('click', () => {
        console.log(poll.registerNewAnswer());
    });
}
//# sourceMappingURL=functionPractice.js.map