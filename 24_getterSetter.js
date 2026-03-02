//CLASSES of getter setter
/*
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value               //"_email" is used for internal storage
    }

    get password(){
        return `${this._password}shreya`
    }
    set password(value){
        this._password = value
    }
}
const shreya = new User("s@shreya.ai", "abc")
console.log(shreya.email);
*/





// property_GET_SET
/*
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {       //DEFINEPROPERTY is a property of getter ans setter
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
const chai = new User("chai@chai.com", "chai")
console.log(chai.email);
*/





//OBJECT OF GETTER SETTER

const User = {
    _email: 's@ss.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);


/*

                    User Object
                        ↓
                    Setter → stores value
                        ↓
                    Getter → returns modified value

*/