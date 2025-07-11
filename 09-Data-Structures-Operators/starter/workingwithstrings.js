const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B3773'[0]);

console.log(airline.length);
console.log('B3773'.length);

//METHODS:
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//PRACTICE EXAMPLE :

const checkMiddleSeat = function (seat) {
  // B and E are middle seats.
  const seatnumber = seat.slice(-1);
  if (seatnumber === 'B' || seatnumber === 'E') {
    console.log(seatnumber);
    console.log('You have a middle Seat');
  } else {
    console.log(seatnumber);
    console.log("You don't have a middle seat");
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//----------------------------------------------------
//How js converts a primitive String to a String Object which allows and gives us methods:

//When we apply methods on a string, Js automatically turns our string into a String object which gives us all these functions. After performing our operations it then transform back into a primitve string, - this all happens in backend, the example is to show how in code this could be reflected:

const jsbackend = new String('TAP Air Portugal');
console.log(jsbackend);
console.log(typeof jsbackend);
console.log(typeof jsbackend.slice(1)); //here you can see what it returns after operation is a string.

//-------------MORE STRING METHODS:
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//--------------Example :fix capitalization in passenger name:
const passenger = 'jOnAs'; //it should be Jonas
const correctpassenger =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(correctpassenger);

//-----------Example : comparing user email:
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n'; //we have spaces and capitalization issues

const normalizedemail = loginEmail.toLowerCase().trim();
console.log(normalizedemail);
console.log(email === normalizedemail ? 'correct' : `false`);

//Replacing:
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to boarding door 23, Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

//----------3 methods that returns booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));

console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family.');
}

//Practice Exercise:
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

//-------------SPLIT METHOD:
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Roman Akmal'.split(' ');
console.log(firstName, lastName);

//----------------JOIN METHOD:
const joinName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(joinName);

//Another example to capitalize first letter after space by a function
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jesica ann smith devis');
capitalizeName('roman akmal');

//Another way to do the same thing as above:>
const capitalizeName2 = function (username) {
  const name = username.split(' ');
  const corrnames = [];
  for (const n of name) {
    corrnames.push(n.replace(n[0], n[0].toUpperCase()) + n.slice(1, ' '));
  }
  console.log(corrnames.join(' '));
};

capitalizeName2('roman akmal maher');

//------Padding a string: (add number of strings till a string reach a desired length)

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('roman'.padStart(25, '+'));

//Example for padding for credit card example:
const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4334877890091257));

//-------------repeat method:
const reportmessage = 'Bad weather... All Departures Delayed... ';
console.log(reportmessage.repeat(5));

//another example for repeat:
const plainInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};
plainInLine(4);
plainInLine(2);

//----------Another Example for using String Methods:
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}
