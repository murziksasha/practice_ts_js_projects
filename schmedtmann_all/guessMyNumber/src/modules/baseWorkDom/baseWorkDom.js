export function baseWorkDom() {
    const message = document.querySelector('.message');
    const check = document.querySelector('.check');
    const guess = document.querySelector('.guess');
    const myGuess = +(guess === null || guess === void 0 ? void 0 : guess.value);
    check.addEventListener('click', () => {
        if (!myGuess) {
            message.textContent = '🚫No Number🚫';
        }
    });
}
//# sourceMappingURL=baseWorkDom.js.map