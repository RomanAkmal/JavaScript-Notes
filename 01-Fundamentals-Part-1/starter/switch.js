const day = "";

switch (day) {
  case "monday":
    console.log("Yes today is monday");
    console.log("Learn JavaScript");
    break;
  case "tuesday":
    console.log("Yes today is tuesday");
    console.log("Learn CSS");
    break;
  case "wednesday":
  case "thursday":
    console.log("Yes today is wednesday or thursday");
    console.log("Learn Operating system");
    break;
  case "friday":
    console.log("Yes today is friday");
    console.log("Learn Html");
    break;
  case "saturday":
  case "sunday":
    console.log("Yes today is saturday or sunday");
    console.log("Take rest");
    break;
  default:
    console.log("Not a valid day");
}

if (day == "monday") {
  console.log("Yes today is monday");
  console.log("Learn JavaScript");
} else if (day == "tuesday") {
  console.log("Yes today is tuesday");
  console.log("Learn CSS");
} else if (day == "wednesday" || day == "thursday") {
  console.log("Yes today is wednesday or thursday");
  console.log("Learn Operating system");
} else if (day == "friday") {
  console.log("Yes today is friday");
  console.log("Learn Html");
} else if (day == "saturday" || day == "sunday") {
  console.log("Yes today is saturday or sunday");
  console.log("Take rest");
} else {
  console.log("Not a valid day");
}
