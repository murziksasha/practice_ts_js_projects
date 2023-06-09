

export function contextThis() {

  const rest: Map<number | string | boolean, string | number> = new Map([
    ['question', 'What is the best programming language in the World?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🥳'],
    [false, 'INcorrect 😿']
  ] as Iterable<readonly[number | string | boolean, string | number]>);

  console.log(rest.get(false));

}