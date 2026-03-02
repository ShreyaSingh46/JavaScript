const descripter = Object.getOwnPropertyDescriptors(Math, "PI")
//console.log(descripter);

//console.log(Math.PI);
//Math.Pi = 5
//console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 15,
    isAvailable: true
}
//console.log(Object.getOwnPropertyDescriptors(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: true,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}