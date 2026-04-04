// FOR OF

//["", "", "", ""]
//[{}, {}, {}, {}]

const arr = [1, 2, 3, 4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Konichiwaaa!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// MAPS   (it is not iterative)

const map = new Map()
map.set('In', "India")
map.set('Ja', "Japan")
map.set('Sp', "Spain")
map.set('USA', "United States of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


//OBJECTS

const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}
for (const key in myObject) {
    //console.log(myObject[key]);
    console.log(`${key} shorcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(programming[key]);
    
}



//coding!!!

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    //console.log(val);
}
)

coding.forEach ( (item) => {
    //console.log(item);
    
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach ((item, index, arr)=>{
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName: "python",
        languageFileName: "py" 
    },
    {
        languageName: "ruby",
        languageFileName: "rb" 
    },
    {
        languageName: "C++",
        languageFileName: "cpp" 
    },
    {
        languageName: "ABCD",
        languageFileName: "xyz" 
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})

