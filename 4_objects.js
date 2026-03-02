/*
//OBJECT1

// singleton
// Object.create

//object  literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shreya",
    "full name": "Shreya Patil",
    [mySym]: "myKey1",
    age: 19,
    location: "Nashik",
    email: "shreya098@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Tuesday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "shreya098@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "shreya098123@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/




/*
//OBJECT2

//const tinderUser = new Object () //singleton
const tinderUser = {} //non-singleton
console.log(tinderUser); //same output

tinderUser.id = "135apple"
tinderUser.name = "John"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shreya",
            lastname: "singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));*/



//OBJECT3

const course = {
    coursename: "js in german",
    price: "1200",
    courseInstructor: "sam"
}

course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//react ka hai not js
//const navbar = ({company}) => {}  
//navbar(company = "shreya") // curly brackets means deconstruction

//APIs
/* {
    "name": "sam",
    "coursename": "js in german",
    "price": "free"
}
 */

[
    {},
    {},
    {}
]