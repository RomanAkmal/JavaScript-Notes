console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Money is available, Spend Wisely");
} else {
  console.log("No money, get a job ASAP");
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}
