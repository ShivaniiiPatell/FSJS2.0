const date = new Date();

const year = date.getUTCFullYear();
const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Month is 0-based
const day = String(date.getUTCDate()).padStart(2, "0");

const hour = String(date.getUTCHours()).padStart(2, "0");
const minute = String(date.getUTCMinutes()).padStart(2, "0");

const strDate1 = year + "-" + month + "-" + day + " " + hour + ":" + minute;

const strDate2 = day + "-" + month + "-" + year + " " + hour + ":" + minute;

const strDate3 = day + "/" + month + "/" + year + " " + hour + ":" + minute;

console.log(strDate1);
console.log(strDate2);
console.log(strDate3);
