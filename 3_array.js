/*
// array
const myArr = [1, 2, 3, 4, 5, 6]
//const myDisneyPrincesse = ["Elsa", "Tina", "Belle", "Rupunzal"]
console.log(myArr[4]);
console.log(myArr.length);
//console.log(myDisneyPrincesse[2]);

const myArr2 = new Array(4,7,8,9)
console.log(myArr2[1])

// array methods
myArr.push(7) //add element at the end
console.log(myArr);

myArr2.pop() //remove element from the end
console.log(myArr2);

myArr.unshift(8) //add element at the beginning
console.log(myArr);

myArr2.shift() //remove element from the beginning
console.log(myArr2);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice and splice
console.log("A", myArr);
const myNew1 = myArr.slice(2,5)
console.log(myNew1);

console.log("B", myArr);
const myNew2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myNew2);
*/


const myBarbie = ["Clara", "Tori", "Kristyn", "Annika"]
const myPrincess = ["Elsa", "Belle", "Jasmine", "Mulan"]

//myBarbie.push(myPrincess)

//console.log(myBarbie);
//console.log(myBarbie[4][2]);

const allGurls = myBarbie.concat(myPrincess)
console.log(allGurls);

const allGurls2 = [...myBarbie, ...myPrincess]
console.log(allGurls2);

const new_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

const real_new_array = new_array.flat(3)
console.log(real_new_array);

console.log(Array.isArray("Shreya"));
console.log(Array.from("Shreya"));
console.log(Array.from({name: "Shreya"})); // empty array****

let score1 = 150
let score2 = 200
let score3 = 250
console.log(Array.of(score1, score2, score3));








