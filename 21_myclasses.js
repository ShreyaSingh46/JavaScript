/*class User {
    constructor(username, emails, password){
        this.username = username;
        thins.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase}abc`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUser());
*/




// behind the scene
/*
function User (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUser = function(){
    return `${this.password}abc`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUser());
*/




// inheritance
/*
class User {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.logMe()
const masalaChai = new User ("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
*/






// staticproperty

class User {
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return `123`
    }
}

const shreya = new User("shreya")
console.log(shreya.createId())
//console.log(User.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
//console.log(Teacher.createId());









