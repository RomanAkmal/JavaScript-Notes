const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

if (hasDrivingLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("sarah can not drive");
}

const isTired = false;
if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("sarah can not drive");
}
