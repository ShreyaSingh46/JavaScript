// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 49 ) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Executed");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
    var power = "fly"
    console.log(`User power: ${power}`);  //scope, scope ke andar hi reheta hai
}
console.log(`User power: ${power}`);

//------------hehe------------

const balance = 1000
if (balance > 500) console.log("test"), console.log("test2");
//bina curly brackets ke ek line pe likh rahe hai toh thik hai "," lagane ki itni jaroorat nhi hai


if (balance > 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1500");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2) {   //multiple condition check karna
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
    default:
        console.log("default case match");
        break;
}



//TRUTHY & FALSY
const userEmail = [] //"shreya@gmail.com"
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//FALSY VALUE
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUE
// "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("Arrayis empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 20 ?? 30
console.log(val1);


//TERNIARY OPERATOR
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

