'use strict';

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Roman Akmal',
};

//-------------Simple OR  Operator:
// console.log('-----Simple OR Operator-------');
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

//-------------OR Assignment Operator:

// console.log('-----OR Assignment Operator--------');
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

//it has the same issue we encounter in the case of OR which was treated witht he Nullish Coalescing Operator ?? so it also help us solve this:

//-------------Nullish Coalescing Assignment Operator:
// console.log('-----Nullish Coalescing Assignment Operator------');
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

//--------------------------AND Assignment Operator:
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//to assign a value to a variable if it is currently truthy
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
