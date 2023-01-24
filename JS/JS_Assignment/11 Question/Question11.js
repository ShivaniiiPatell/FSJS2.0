/*

 Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const todayDate = date.getDate();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
var bDay = new Date(1970, 01, 01);
var elapsedT = date - bDay;
console.log("What is the year today?", year);
console.log("What is the month today as a number?", month + 1);
console.log("What is the date today?", todayDate);
console.log(" What is the day today as a number?", day);
console.log("What is the hours now?", hours);
console.log("What is the minutes now?", minutes);
console.log(
  "Find out the numbers of seconds elapsed from January 1, 1970 to now.",
  elapsedT
);
