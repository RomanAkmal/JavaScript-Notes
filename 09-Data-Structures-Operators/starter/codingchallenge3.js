/*
Coding Challenge #3

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the event log.

3. Print the following strings to the console. "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking wether it's in the first half or the second half (after 45 minutes) of the game, like this:

      [First Half] 17: ⚽ GOAL

Good Luck !
*/

const gameEvents = new Map([
  [17, '⚽Goal'],
  [36, '🕴️Substitution'],
  [47, '⚽Goal'],
  [61, '🕴️Substitution'],
  [64, '🟡Yellow card'],
  [69, '🔴Red card'],
  [70, '🕴️Substitution'],
  [72, '🕴️Substitution'],
  [76, '⚽Goal'],
  [80, '⚽Goal'],
  [92, '🟡Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)

console.log(gameEvents.values()); //because we just need the values not the keys for this.

const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the event log.

gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following strings to the console. "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(gameEvents.size);
const eventAverage = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${eventAverage} minutes`);

//4. Loop over the events and log them to the console, marking wether it's in the first half or the second half (after 45 minutes) of the game, like this:

//[First Half] 17: ⚽ GOAL

for (const [min, event] of gameEvents) {
  if (min < 45) {
    console.log(`[First Half] ${min}: ${event}`);
  } else if (min > 45 && min < 90) {
    console.log(`[Second Half] ${min}: ${event}`);
  } else {
    console.log(`[OverTime] ${min}: ${event}`);
  }
}
