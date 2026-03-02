//FUCTIONS
/*
function sayMyName() {
    console.log("S");
console.log("H");
console.log("R");
console.log("E");
console.log("Y");
console.log("A");   
}
//sayMyName()

function addTwoNumbers(num1, num2){    //num2 is parametes
    let result = num1+num2
    //console.log("shreya");
    return result
}
//addTwoNumbers(3, "4")
//addTwoNumbers(3, null)
const result = addTwoNumbers(3, 5)  //5 is arguments
console.log("Result:", result);


function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return 
    }
    return '${username} just logged in'
}

//console.log(loginUserMessage("shreya"));
console.log(loginUserMessage());   //both gives same output
*/


//FUNCTIONS with objects and arrays
function calculateCartPrice (val1, val2, ...num1){   //"..." rest operator
    return num1
}
console.log(calculateCartPrice(100, 300, 600, 3000));

const user = {
    username: "shreya", 
    price: 299
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
//handleObject(user)
handleObject({
    username: "sujal",
    price: 399
})

const myNewArray = [200, 300, 500, 700]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 600, 1000]));

