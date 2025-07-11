'use strict';

// Coding Challenge

/*
1. Create one player array for each team (variables 'player1' and 'player2')
2. The first player in any player array is the goalkeeper and the other are field players. For Bayern Munich (team 1) create one variable ('gk') with the goslkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an Array 'allPlayers' containing all players of both teams (22 Players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the orignal team 1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoal') that recieves am arbitrary number of player names (NOT an array) and prints each of them to the console. along with the number of goals who were scored (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, Without using and if-else statment or the ternary operator.

Test DATA for 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'kimmich'. Then call the function again with players from game.scored.


*/

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
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. :Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//2. The first player in any player array is the goalkeeper and the other are field players. For Bayern Munich (team 1) create one variable ('gk') with the goslkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. Create an Array 'allPlayers' containing all players of both teams (22 Players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the orignal team 1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. Write a function ('printGoal') that recieves am arbitrary number of player names (NOT an array) and prints each of them to the console. along with the number of goals who were scored (number of player names passed in)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, Without using and if-else statment or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
