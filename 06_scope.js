/*
//SCOPE, GLOBAL AND LOCAL

//let a = 10
//const b = 20 
//var c = 30
var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20 
    var c = 30
    console.log("Inner: ", a);
    
} //{} is a scope when comes with function
console.log(a);
//console.log(b);
console.log(c);





//Scope level and mini hosting
function one(){
    const username = "shreya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true) {
    const username = "shreya"
    if (username === "shreya") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++ interesting ++++++


function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)
*/






//THIS and arrow function
//this keyword refers to a current context
const user = {
    username: "shreya",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this);   //{}, empty object

/*function chai(){
    let username = "shreya"
    console.log(this);
}
chai()

const chai = function() {
    let username = "shreya"
    console.log(this);
}   */                      //undefined

const chai = () => {
    let username = "shreya"           //empty object, {}
    console.log(this);
}
chai()


//const addTwo = (num1, num2) => {
//    return num1 + num2
//}
//console.log(addTwo(4,6));

//const addTwo = (num1, num2) => num1 +num2
//console.log(addTwo(4,6))

//const addTwo = (num1, num2) => (num1 +num2)
//console.log(addTwo(4,6))

const addTwo = (num1, num2) => ({username: "shreya"})
console.log(addTwo(4,6))          //if curly bracket is not present then it give the undefined value as an output