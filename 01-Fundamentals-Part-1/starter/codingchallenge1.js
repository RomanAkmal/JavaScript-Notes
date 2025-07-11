/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// ---------------------------------------Test DATA 1

let massMark = 78;
let heightmark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

BMImark = massMark / (heightmark * heightmark);
console.log("mark bmi is " + BMImark);

BMIjohn = massJohn / (heightJohn * heightJohn);
console.log("john bmi is " + BMIjohn);

let = markHigherBMI = BMImark > BMIjohn;
console.log("mark BMI is higher than john : " + markHigherBMI);

markHigherBMI = BMImark < BMIjohn;
console.log("john BMI is higher than mark : " + markHigherBMI);

// ---------------------------------------------Test DATA 2

massMark = 95;
heightmark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMImark = massMark / (heightmark * heightmark);
console.log("mark bmi is " + BMImark);

BMIjohn = massJohn / (heightJohn * heightJohn);
console.log("john bmi is " + BMIjohn);

markHigherBMI = BMImark > BMIjohn;
console.log("mark BMI is higher than john : " + markHigherBMI);

markHigherBMI = BMImark < BMIjohn;
console.log("john BMI is higher than mark : " + markHigherBMI);
