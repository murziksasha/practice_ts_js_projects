

export function soccerBetApp() {
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
  };

  // for(const [key, surname] of Object.entries(game.scored)){
  //   console.log(`Goal ${+key + 1}: ${surname}`);
  // }

  // let accumulateOdd: number = 0;
  // let pointToDevide: string[] = [];
  // for (const [key, value] of Object.entries(game.odds)){
  //   accumulateOdd += value;
  //   pointToDevide.push(key)
  // }
  // console.log((accumulateOdd / pointToDevide.length).toFixed(2));

  //3

  for(const [team, odd] of Object.entries(game.odds)){
    //@ts-ignore
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
  }

  // let scorers: any = {};
  // for (let [key, value] of Object.entries(game.scored)){
  //   scorers[value] = key;
  // }

  // console.log(scorers);


// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const {odds: {team1, x: draw, team2}} = game;

// const printGoals = (...arr: string[]) => {
//   const players = [...arr];
//   console.log(`${players.length} goals was scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimnich')
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// team1 < team2 ? console.log(game.team1) : console.log(game.team2)









}