//change the datatyoe of a value to another (strings , numbers , booleans)

// let age = window.prompt("How old are you");
// let age2 = window.prompt("How");

// age += 1;

// console.log("you are "+ age);
// console.log(typeof age);

// age2 = Number(age2); //converting string to number data type

// age2 += 1;
// console.log("You are "+age2);
// console.log(typeof age2);


let x;
let y;
let z;

x = Number(3.14); // --> NaN if given type is not a number
y = String(3.14);
z = Boolean("hello"); //false --> for empty string or null data type otherwise true

console.log(x , typeof x);
console.log(y , typeof y);
console.log(z , typeof z);