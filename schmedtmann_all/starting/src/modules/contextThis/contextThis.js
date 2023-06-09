export function contextThis() {
    const rest = new Map([
        ['question', 'What is the best programming language in the World?'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'JavaScript'],
        ['correct', 3],
        [true, 'Correct 🥳'],
        [false, 'INcorrect 😿']
    ]);
    console.log(rest.get(false));
}
//# sourceMappingURL=contextThis.js.map