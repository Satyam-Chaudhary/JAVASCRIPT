//declaration --> var, let  and const.
//assignment --> (= assignment operator)

let age;


age = 18; //num data type

let firstName = "Satyam Chaudhary" //String data type

age += 1;

let student = true; //boolean data type

console.log(age);
console.log(firstName);
console.log(student);

console.log("Hello" , firstName);
console.log("You are" , age, "years old");

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled " + student;
