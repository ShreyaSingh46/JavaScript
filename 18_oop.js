const user = {
    username: "shreya",  //string
    loginCount: 8,      //number
    signedIn: true,    //boolean

    getUserDetails: function(){     //a function inside an object,  method used to show user details
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);        //current object
        //console.log(this);
    }

}
//user.getUserDetails();

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("shreya", 12, true)
const userTwo = new User("singh", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

