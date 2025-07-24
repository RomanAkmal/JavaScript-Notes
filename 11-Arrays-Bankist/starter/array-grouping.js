const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposit' : 'withdrawal'
);

console.log(groupedMovements);

//---------------Another Example:

const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  type: 'premium',
};

const account2 = {
  movements: [],
  type: 'premium',
};

const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  type: 'basic',
};

const account4 = {
  movements: [430],
  type: 'standard',
};

const account5 = {
  movements: [300, 5400, 100, 544],
  type: 'premium',
};

const accounts = [account1, account2, account3, account4, account5];

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'Very Active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

//groupBy() shines or is utilised the most when there is a commonality - a common property or behaviour / characteristic bw different objects or Arrays.

const groupedByTypes = Object.groupBy(accounts, account => account.type);

console.log(groupedByTypes);
