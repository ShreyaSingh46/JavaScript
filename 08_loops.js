// FOR LOOPS!!!!!!!!!!

//for (let index = 0; index < Array.length; index++) 
//we write index as "i"

for (let index = 0; index <= 10; index++) {
    const element = index;
    //console.log(element);
}

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
        console.log("5 is a best number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
}

let myArray = ["Elsa", "Aurora", "Mulan"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


//KEYWORD: BREAK & CONTINUE

for (let i=1; i<=20; i++) {
    if (i == 13) {
        console.log(`Detected 13`);
        break
    }
    console.log(`Value of i is ${i}`);
    
}


for (let i=1; i<=20; i++) {
    if (i == 13) {
        console.log(`Detected 13`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}



// WHILE LOOPS!!!!!!!!!!!

let index = 0
while (index <=10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArrr = ['Elsa', 'Aurora', 'Mulan']

let arr = 0
while (arr < myArrr.length) {
    console.log(`value is ${myArrr[arr]}`);
    arr = arr+1
}


// DO WHILE LOOP!!!!!!!!

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (index <=10);