// NUMBERS
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); 

// MATHEMATICS
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4,2,8,6,1));
console.log(Math.max(4,2,8,6,1));
console.log(Math.sqrt(64));
console.log(Math.pow(3,4));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);



//Dates
let myDate = new Date ()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date (2026, 0, 26)
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date (2026, 0, 26, 6, 3)

